package com.pocketpay.user.service;


import com.pocketpay.user.dto.UserDTO;

import java.util.List;

public interface UserService {

    UserDTO findById(long userId);

    UserDTO updateUser(UserDTO user);

    UserDTO saveUser(UserDTO user);

    List<UserDTO> findAllUsers();
}
