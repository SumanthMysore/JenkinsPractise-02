package com.pocketpay.user.service;

import com.pocketpay.user.dto.UserProfileDTO;
import com.pocketpay.user.entity.Role;
import com.pocketpay.user.entity.UserProfile;
import com.pocketpay.user.exception.EntityNotFoundExceptionn;
import com.pocketpay.user.exception.UserEntityException;
import com.pocketpay.user.mapper.UserProfileMapper;
import com.pocketpay.user.repository.UserProfileRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import javax.validation.ConstraintViolation;
import javax.validation.Validator;
import java.util.Optional;
import java.util.Set;

@Service
@Slf4j
@Transactional
public class UserProfileServiceImpl implements UserProfileService {

    @Autowired
    private UserProfileRepository profileRepository;

    @Autowired
    private UserProfileMapper userProfileMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private Validator validator;


    @Override
    public UserProfileDTO findByEmail(String email) {
        log.info("request received at findByEmail method in service layer");
        Optional<UserProfile> result = profileRepository.findByEmail(email);
        if (result.isPresent()) {
            log.info("User entity found by given email");
            return userProfileMapper.convertToUserDTO(result.get());
        } else {
            log.error("Exception thrown: User not found with email :{}", email);
            throw new EntityNotFoundExceptionn("UserProfile not found with given email");
        }
    }

    @Override
    public UserProfileDTO registerUser(UserProfileDTO user) {
        log.info("request received at save method in service layer");
        UserProfile userEntity = userProfileMapper.convertToUserEntity(user);
        Set<ConstraintViolation<UserProfile>> violations = validator.validate(userEntity);
        Optional<UserProfile> result = profileRepository.findByEmail(userEntity.getEmail());
        if (result.isPresent()) {
            throw new UserEntityException("user profile already exists with email : " + user.getEmail());
        } else if (violations.isEmpty()) {
            log.info(user.getEmail() + " mail");
            log.info(user.getId() + " id");
            userEntity.setPassword((passwordEncoder.encode(user.getPassword())));
            Role role = new Role(1, "ROLE_USER");
            userEntity.getRoles().add(role);
            UserProfile registeredUser = profileRepository.save(userEntity);
            return userProfileMapper.convertToUserDTO(registeredUser);
        } else {
            log.error("Exception thrown: cannot save user profile");
            throw new UserEntityException("cannot save user profile: Invalid data");
        }
    }
}
