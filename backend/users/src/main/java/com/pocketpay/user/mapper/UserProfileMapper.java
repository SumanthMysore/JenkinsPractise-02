package com.pocketpay.user.mapper;

import com.pocketpay.user.dto.UserProfileDTO;
import com.pocketpay.user.entity.UserProfile;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserProfileMapper {

    @Autowired
    private ModelMapper modelMapper;

    public UserProfile convertToUserEntity(UserProfileDTO profile) {
        return modelMapper.map(profile, UserProfile.class);
    }

    public UserProfileDTO convertToUserDTO(UserProfile userProfile) {
        return modelMapper.map(userProfile, UserProfileDTO.class);
    }
}
