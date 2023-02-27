package com.pocketpay.user.service;

import com.pocketpay.user.dto.UserProfileDTO;

public interface UserProfileService {

    UserProfileDTO findByEmail(String email);

    UserProfileDTO registerUser(UserProfileDTO user);
}
