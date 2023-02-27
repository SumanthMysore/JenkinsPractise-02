package com.pocketpay.user.security;

import com.pocketpay.user.entity.Role;
import com.pocketpay.user.entity.UserProfile;
import com.pocketpay.user.exception.UserEntityException;
import com.pocketpay.user.repository.UserProfileRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

@ExtendWith(MockitoExtension.class)
class UserDetailServiceTest {
    @InjectMocks
    UserDetailService userDetailService;

    @Mock
    UserProfileRepository userRepository;

    @Mock
    Role role;

    @Mock
    Set<Role> roleList;

    @Mock
    UserProfile user;

    @Test
    void loadUserByUsernameTest() {
        role = new Role();
        roleList = new HashSet<>();

        role.setId(1);
        role.setName("ROLE_USER");
        roleList.add(role);
        user = new UserProfile(1, "test@gmail.com", "Test@123", roleList);

        Mockito.when(userRepository.findByEmail("test@gmail.com")).thenReturn(Optional.of(user));
        assertEquals(user.getEmail(), userDetailService.loadUserByUsername("test@gmail.com").getUsername());
    }

    @Test
    void loadUserByUsernameExceptionTest() {
        role = new Role();
        roleList = new HashSet<>();

        role.setId(1);
        role.setName("ROLE_USER");
        roleList.add(role);
        user = new UserProfile(2, "test@gmail.com", "Test@123", roleList);

        Mockito.when(userRepository.findByEmail("test@gmail.com")).thenReturn(Optional.empty());
        RuntimeException thrown = assertThrows(UserEntityException.class, () -> {
            userDetailService.loadUserByUsername("test@gmail.com");
        });
        assertEquals(("User not found with given email"), thrown.getMessage());
    }
}