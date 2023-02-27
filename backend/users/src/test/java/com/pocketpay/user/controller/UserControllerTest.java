package com.pocketpay.user.controller;

import com.pocketpay.user.dto.AddressDTO;
import com.pocketpay.user.dto.UserDTO;
import com.pocketpay.user.dto.UserProfileDTO;
import com.pocketpay.user.entity.Address;
import com.pocketpay.user.entity.Role;
import com.pocketpay.user.entity.User;
import com.pocketpay.user.entity.UserProfile;
import com.pocketpay.user.mapper.UserMapper;
import com.pocketpay.user.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.mockito.Mockito.when;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
class UserControllerTest {

    @Autowired
    private WebApplicationContext context;

    @InjectMocks
    UserController userController;

    @MockBean
    UserService userService;

    @MockBean
    UserMapper userMapper;

    @Mock
    Role role;

    @Mock
    Set<Role> roleList;

    @Mock
    User user;

    @Mock
    UserDTO userDTO;

    @Mock
    AddressDTO addressDTO;

    @Mock
    Address address;

    @Mock
    UserProfile userProfile;

    @Mock
    UserProfileDTO userProfileDTO;


    @BeforeEach
    void setup() {
        addressDTO = new AddressDTO(1L, "Mumbai east", "dadar", "400200");
        address = new Address(1L, "Mumbai east", "dadar", "400200", user);
        userDTO = new UserDTO(1L, "sam", "disel", "10-02-2023", "8901234567", addressDTO);
        user = new User(1L, "sam", "disel", "10-02-2023", "8901234567", address);
    }


    @Test
    void getByUserIdTest() throws Exception {
        when(this.userService.findById(1)).thenReturn(userDTO);
        MockMvc mockMvc = MockMvcBuilders.webAppContextSetup(this.context).build();
        mockMvc.perform(get("/api/users/1")).andExpect(status().is(200));
    }

    @Test
    void saveUsersTest() throws Exception {
        MockMvc mockMvc = MockMvcBuilders.webAppContextSetup(this.context).build();
        mockMvc.perform(post("/api/users/").contentType(MediaType.APPLICATION_JSON)
                .content(String.valueOf(userDTO))).andExpect(status().is(400));
    }

    @Test
    void updateByUserIdTest() throws Exception {
        MockMvc mockMvc = MockMvcBuilders.webAppContextSetup(this.context).build();
        mockMvc.perform(put("/api/users/1").contentType(MediaType.APPLICATION_JSON).content(String.valueOf(user))).andExpect(status().is(400));
    }

    @Test
    void getAllUsers() throws Exception {
        List<User> users = new ArrayList<>();
        List<UserDTO> userDTOS = new ArrayList<>();
        users.add(user);
        userDTOS.add(userDTO);
        when(userMapper.convertToUserList(users)).thenReturn(userDTOS);
        when(userService.findAllUsers()).thenReturn(userDTOS);
        MockMvc mockMvc = MockMvcBuilders.webAppContextSetup(this.context).build();
        mockMvc.perform(get("/api/users/")).andExpect(status().is(200));
    }

    @Test
    void registerUserTest() throws Exception {

        role = new Role();
        roleList = new HashSet<>();

        role.setId(1);
        role.setName("ROLE_USER");
        roleList.add(role);

        userProfile = new UserProfile(1, "test@gmail.com", "Test@123", roleList);
        userProfileDTO = new UserProfileDTO(1, "test@gmail.com", "Test@123");

        MockMvc mockMvc = MockMvcBuilders.webAppContextSetup(this.context).apply(springSecurity()).build();
        mockMvc.perform(post("/api/users/register").contentType(MediaType.APPLICATION_JSON).content(String.valueOf(userDTO))).andExpect(status().is(400));
    }


}