package com.pocketpay.user.mapper;

import com.pocketpay.user.dto.UserProfileDTO;
import com.pocketpay.user.entity.Role;
import com.pocketpay.user.entity.UserProfile;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;

import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
class UserProfileMapperTest {

    @InjectMocks
    UserProfileMapper userProfileMapper;

    @Mock
    ModelMapper modelMapper;

    @Mock
    UserProfile userProfile;

    @Mock
    UserProfileDTO userProfileDTO;

    @Mock
    Role role;

    @Mock
    Set<Role> roleList;

    @BeforeEach
    void setup() {
        role = new Role();
        roleList = new HashSet<>();

        role.setId(1);
        role.setName("ROLE_USER");
        roleList.add(role);

        userProfile = new UserProfile(1, "test@gmail.com", "Test@123", roleList);
        userProfileDTO = new UserProfileDTO(1, "test@gmail.com", "Test@123");
    }

    @Test
    void convertToUserEntityTest() {
        Mockito.when(modelMapper.map(userProfileDTO, UserProfile.class)).thenReturn(userProfile);
        assertEquals(userProfileMapper.convertToUserEntity(userProfileDTO).getEmail(), userProfile.getEmail());
    }

    @Test
    void convertToUserDTOTest() {
        Mockito.when(modelMapper.map(userProfile, UserProfileDTO.class)).thenReturn(userProfileDTO);
        UserProfileDTO convertToUserDTO = userProfileMapper.convertToUserDTO(userProfile);
        assertEquals(convertToUserDTO.getEmail(), userProfile.getEmail());
    }
}