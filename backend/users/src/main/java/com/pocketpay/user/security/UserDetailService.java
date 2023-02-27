package com.pocketpay.user.security;

import com.pocketpay.user.entity.UserProfile;
import com.pocketpay.user.exception.UserEntityException;
import com.pocketpay.user.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserDetailService implements UserDetailsService {

    @Autowired
    private UserProfileRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<UserProfile> result = userRepository.findByEmail(username);
        if(result.isPresent()){
            return result.get();
        }
        else {
            throw new UserEntityException("User not found with given email");
        }
    }
}
