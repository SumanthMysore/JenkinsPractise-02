package com.pocketpay.user.service.impl;

import com.pocketpay.user.dto.UserProfileDTO;
import com.pocketpay.user.entity.Role;
import com.pocketpay.user.entity.User;
import com.pocketpay.user.entity.UserProfile;
import com.pocketpay.user.exception.EntityNotFoundExceptionn;
import com.pocketpay.user.exception.UserEntityException;
import com.pocketpay.user.mapper.UserProfileMapper;
import com.pocketpay.user.repository.UserProfileRepository;
import com.pocketpay.user.service.UserProfileService;
import com.pocketpay.user.service.UserProfileServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.validation.ConstraintViolation;
import javax.validation.Validator;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

@ExtendWith(MockitoExtension.class)
class UserProfileServiceImplTest {

    @InjectMocks
    UserProfileService userProfileService = new UserProfileServiceImpl();

    @Mock
    PasswordEncoder passwordEncoder;

    @Mock
    UserProfileMapper userProfileMapper;

    @Mock
    UserProfile userProfile;

    @Mock
    UserProfileDTO userProfileDTO;

    @Mock
    UserProfileRepository profileRepository;

    @Mock
    Validator validator;

    @Mock
    Role role;

    @Mock
    Set<Role> roleList;

    @Mock
    Set<ConstraintViolation<User>> violations;

    @Mock
    Set<ConstraintViolation<UserProfile>> profileViolations;

    @Test
    void registerUserTest() {
        role = new Role();
        roleList = new HashSet<>();

        role.setId(1);
        role.setName("ROLE_USER");
        roleList.add(role);

        userProfile = new UserProfile(1, "test@gmail.com", "Test@123", roleList);
        userProfileDTO = new UserProfileDTO(1, "test@gmail.com", "Test@123");

        Mockito.when(userProfileMapper.convertToUserEntity(userProfileDTO)).thenReturn(userProfile);
        Mockito.when(profileRepository.findByEmail("test@gmail.com")).thenReturn(Optional.empty());
        Mockito.when(passwordEncoder.encode(userProfile.getPassword())).thenReturn(userProfile.getPassword());
        Mockito.when(profileRepository.save(userProfile)).thenReturn(userProfile);
        Mockito.when(userProfileMapper.convertToUserDTO(userProfile)).thenReturn(userProfileDTO);
        assertEquals(userProfile.getEmail(), userProfileService.registerUser(userProfileDTO).getEmail());
    }

    @Test
    void registerUserTestWhenUserAlreadyExistsInDB() {
        role = new Role();
        roleList = new HashSet<>();

        role.setId(1);
        role.setName("ROLE_USER");
        roleList.add(role);

        userProfile = new UserProfile(1, "test@gmail.com", "Test@123", roleList);
        userProfileDTO = new UserProfileDTO(1, "test@gmail.com", "Test@123");

        Mockito.when(userProfileMapper.convertToUserEntity(userProfileDTO)).thenReturn(userProfile);
        Mockito.when(profileRepository.findByEmail("test@gmail.com")).thenReturn(Optional.of(userProfile));
        RuntimeException thrown = assertThrows(UserEntityException.class, () -> {
            userProfileService.registerUser(userProfileDTO);
        });
        assertEquals(("user profile already exists with email : test@gmail.com"), thrown.getMessage());
    }

    @Test
    void registerUserTestWithViolations() {
        role = new Role();
        roleList = new HashSet<>();

        role.setId(1);
        role.setName("ROLE_USER");
        roleList.add(role);

        userProfile = new UserProfile(1, "test@gmail", "Test@123", roleList);
        userProfileDTO = new UserProfileDTO(1, "test@gmail", "Test@123");

        Mockito.when(userProfileMapper.convertToUserEntity(userProfileDTO)).thenReturn(userProfile);
        Mockito.when(profileRepository.findByEmail("test@gmail")).thenReturn(Optional.empty());
        Mockito.when(validator.validate(userProfile)).thenReturn(profileViolations);
        Mockito.when(profileViolations.isEmpty()).thenReturn(false);
        RuntimeException thrown = assertThrows(UserEntityException.class, () -> {
            userProfileService.registerUser(userProfileDTO);
        });
        assertEquals(("cannot save user profile: Invalid data"), thrown.getMessage());
    }

    @Test
    void findByEmailTest() {
        role = new Role();
        roleList = new HashSet<>();

        role.setId(1);
        role.setName("ROLE_USER");
        roleList.add(role);

        userProfile = new UserProfile(1, "test@gmail", "Test@123", roleList);
        userProfileDTO = new UserProfileDTO(1, "test@gmail", "Test@123");

        Mockito.when(profileRepository.findByEmail("test@gmail.com")).thenReturn(Optional.of(userProfile));
        Mockito.when(userProfileMapper.convertToUserDTO(Optional.of(userProfile).get())).thenReturn(userProfileDTO);
        assertEquals(userProfile.getEmail(), userProfileService.findByEmail("test@gmail.com").getEmail());
    }

    @Test
    void findByEmailExceptionTest() {
        Mockito.when(profileRepository.findByEmail("test@gmail.com")).thenReturn(Optional.empty());
        RuntimeException thrown = assertThrows(EntityNotFoundExceptionn.class, () -> {
            userProfileService.findByEmail("test@gmail.com");
        });
        assertEquals(("UserProfile not found with given email"), thrown.getMessage());
    }

}