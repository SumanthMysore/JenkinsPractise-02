package com.pocketpay.user.mapper;

import com.pocketpay.user.dto.UserDTO;
import com.pocketpay.user.entity.User;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserMapper {

    @Autowired
    private ModelMapper modelMapper;

    public User convertToUserEntity(UserDTO userDTO) {
        return modelMapper.map(userDTO, User.class);
    }

    public UserDTO convertToUserDTO(User user) {
        return modelMapper.map(user, UserDTO.class);
    }

    public List<UserDTO> convertToUserList(List<User> users) {
        return users.stream().map((user) -> modelMapper.map(user, UserDTO.class))
                .collect(Collectors.toList());
    }

}