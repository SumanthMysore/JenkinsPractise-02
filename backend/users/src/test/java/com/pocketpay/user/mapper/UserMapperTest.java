package com.pocketpay.user.mapper;

import com.pocketpay.user.dto.AddressDTO;
import com.pocketpay.user.dto.UserDTO;
import com.pocketpay.user.entity.Address;
import com.pocketpay.user.entity.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
class UserMapperTest {
    @InjectMocks
    UserMapper userMapper;

    @Mock
    ModelMapper modelMapper;

    @Mock
    User user;

    @Mock
    UserDTO userDTO;

    @Mock
    Address address;

    @Mock
    AddressDTO addressDTO;


    @BeforeEach
    void setup() {
        addressDTO = new AddressDTO(1L, "Mumbai east", "dadar", "400200");
        address = new Address(1L, "Mumbai east", "dadar", "400200", user);
        userDTO = new UserDTO(1L, "sam", "disel", "10-02-2023", "8901234567", addressDTO);
        user = new User(1L, "sam", "disel", "10-02-2023", "8901234567", address);
    }

    @Test
    void convertToUserEntity() {
        Mockito.when(modelMapper.map(userDTO, User.class)).thenReturn(user);
        assertEquals(userMapper.convertToUserEntity(userDTO).getFirst_name(), user.getFirst_name());
    }

    @Test
    void convertToUserDTO() {
        Mockito.when(modelMapper.map(user, UserDTO.class)).thenReturn(userDTO);
        UserDTO convertToUserDTO = userMapper.convertToUserDTO(user);
        assertEquals(convertToUserDTO.getId(), user.getId());
        assertEquals(convertToUserDTO.getFirst_name(), user.getFirst_name());
    }

    @Test
    void convertToUserList() {
        List<User> users = new ArrayList<>();
        users.add(user);
        Mockito.when(userMapper.convertToUserDTO(user)).thenReturn(userDTO);
        List<UserDTO> userDTOS = users.stream().map((user) -> modelMapper.map(user, UserDTO.class))
                .collect(Collectors.toList());
        assertEquals(1, userDTOS.size());
    }
}