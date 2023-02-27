package com.pocketpay.user.service;


import com.pocketpay.user.dto.UserDTO;
import com.pocketpay.user.entity.User;
import com.pocketpay.user.exception.EntityNotFoundExceptionn;
import com.pocketpay.user.exception.UserEntityException;
import com.pocketpay.user.mapper.UserMapper;
import com.pocketpay.user.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import javax.validation.ConstraintViolation;
import javax.validation.Validator;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;


@Service
@Slf4j
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private Validator validator;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public UserDTO findById(long userId) {
        log.info("request received at findById method in service layer");
        Optional<User> result = userRepository.findById(userId);
        if (result.isPresent()) {
            log.info("User entity found");
            return userMapper.convertToUserDTO(result.get());
        } else {
            log.error("Exception thrown: User not found with id :{}", userId);
            throw new EntityNotFoundExceptionn("User not found with given Id");
        }
    }

    @Override
    public UserDTO updateUser(UserDTO userDTO) {
        log.info("request received at update method in service layer");
        Set<ConstraintViolation<UserDTO>> userViolations = validator.validate(userDTO);
        if (userViolations.isEmpty()) {
            Optional<User> result = userRepository.findById(userDTO.getId());
            if (result.isPresent()) {
                userDTO.setId(userDTO.getId());
                User updatedUser = userMapper.convertToUserEntity(userDTO);
                userRepository.save(updatedUser);
                return userDTO;
            } else {
                log.error("Exception thrown: user not found with id: {}", userDTO.getId());
                throw new EntityNotFoundExceptionn(String.format("user not found with id %s", userDTO.getId()));
            }
        } else {
            log.error("Exception thrown: User not updated");
            throw new UserEntityException("cannot update user: Invalid data");
        }
    }

    @Override
    public UserDTO saveUser(UserDTO userDTO) {
        log.info("request received at save method in service layer");
        User userEntity = userMapper.convertToUserEntity(userDTO);
        Set<ConstraintViolation<User>> userViolations = validator.validate(userEntity);
        if (userViolations.isEmpty()) {
            User registeredUser = userRepository.save(userEntity);
            return userMapper.convertToUserDTO(registeredUser);
        } else {
            log.error("Exception thrown: User not saved");
            throw new UserEntityException("cannot save user: Invalid data");
        }
    }

    @Override
    public List<UserDTO> findAllUsers() {
        log.info("request received at findAll method in service layer");
        List<User> userResult = userRepository.findAll();
        if (!userResult.isEmpty()) {
            log.info("User entity found");
            List<UserDTO> users = userResult.stream().map((user) -> modelMapper.map(user, UserDTO.class))
                    .collect(Collectors.toList());
            return users;
        } else {
            log.error("Exception thrown: Users not found");
            throw new EntityNotFoundExceptionn("Users not found");
        }
    }
}
