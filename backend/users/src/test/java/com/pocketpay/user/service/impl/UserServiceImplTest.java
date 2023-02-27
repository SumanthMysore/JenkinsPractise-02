package com.pocketpay.user.service.impl;


import com.pocketpay.user.dto.AddressDTO;
import com.pocketpay.user.dto.UserDTO;
import com.pocketpay.user.entity.Address;
import com.pocketpay.user.entity.User;
import com.pocketpay.user.exception.EntityNotFoundExceptionn;
import com.pocketpay.user.mapper.UserMapper;
import com.pocketpay.user.repository.UserRepository;
import com.pocketpay.user.service.UserService;
import com.pocketpay.user.service.UserServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import javax.validation.Validator;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

@ExtendWith(MockitoExtension.class)
class UserServiceImplTest {

    @InjectMocks
    UserService userService = new UserServiceImpl();

    @Mock
    UserMapper userMapper;

    @Mock
    User user;

    @Mock
    Address address;

    @Mock
    AddressDTO addressDTO;

    @Mock
    UserDTO userDTO;

    @Mock
    UserRepository userRepository;

    @Mock
    Validator validator;

    @BeforeEach
    void setup() {
        addressDTO = new AddressDTO(1L, "Mumbai east", "dadar", "400200");
        address = new Address(1L, "Mumbai east", "dadar", "400200", user);
        userDTO = new UserDTO(1L, "sam", "disel", "10-02-2023", "8901234567", addressDTO);
        user = new User(1L, "sam", "disel", "10-02-2023", "8901234567", address);
    }

    @Test
    void findByIdSuccessTest() {
        Mockito.when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        Mockito.when(userMapper.convertToUserDTO((user))).thenReturn(userDTO);
        assertEquals(user.getFirst_name(), userService.findById(1).getFirst_name());
    }


    @Test
    void findByIdExceptionTest() {
        Mockito.when(userRepository.findById(2L)).thenReturn(Optional.empty());
        RuntimeException thrown = assertThrows(EntityNotFoundExceptionn.class, () -> {
            userService.findById(2L);
        });
        assertEquals(("User not found with given Id"), thrown.getMessage());
    }

    @Test
    void findAll() {
        List<User> users = new ArrayList<>();
        users.add(user);
        Mockito.when(userRepository.findAll()).thenReturn(users);
        assertEquals(1, userRepository.findAll().size());
    }

    @Test
    void updateUserTest() {
        Mockito.when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        Mockito.when(userMapper.convertToUserEntity(userDTO)).thenReturn(user);
        Mockito.when(userRepository.save(user)).thenReturn(user);
        assertEquals(user.getFirst_name(), userService.updateUser(userDTO).getFirst_name());
    }

    @Test
    void updateUserExceptionTest() {
        Mockito.when(userRepository.findById(1L)).thenReturn(Optional.empty());
        RuntimeException thrown = assertThrows(EntityNotFoundExceptionn.class, () -> userService.updateUser(userDTO));
        assertEquals(("user not found with id 1"), thrown.getMessage());
    }

    @Test
    void saveUserTest() {
        Mockito.when(userMapper.convertToUserEntity(userDTO)).thenReturn(user);
        Mockito.when(userRepository.save(user)).thenReturn(user);
        Mockito.when(userMapper.convertToUserDTO(user)).thenReturn(userDTO);
        assertEquals(user.getFirst_name(), userService.saveUser(userDTO).getFirst_name());
    }

}