package com.pocketpay.user.controller;

import com.pocketpay.user.dto.UserDTO;
import com.pocketpay.user.dto.UserProfileDTO;
import com.pocketpay.user.service.UserProfileService;
import com.pocketpay.user.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserProfileService userProfileService;

    @GetMapping("/email/{email}")
    public UserProfileDTO getUserByEmail(@PathVariable String email) {
        log.trace("request received at getByUserEmail");
        return userProfileService.findByEmail(email);
    }

    @PostMapping("/register")
    public ResponseEntity<UserProfileDTO> registerUser(@RequestBody @Valid UserProfileDTO userDTO) {
        log.trace("request received at saveUser");
        return new ResponseEntity<>(userProfileService.registerUser(userDTO), HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        log.trace("request received at getAllUsers");
        return new ResponseEntity<>(userService.findAllUsers(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable long id) {
        log.trace("request received at getByUserId");
        return new ResponseEntity<>(userService.findById(id), HttpStatus.OK);

    }

    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable long id, @RequestBody @Valid UserDTO userDTO) {
        log.trace("request received at updateUser");
        return new ResponseEntity<>(userService.updateUser(userDTO), HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<UserDTO> addUser(@RequestBody @Valid UserDTO userDTO) {
        log.trace("request received at postUser");
        return new ResponseEntity<>(userService.saveUser(userDTO), HttpStatus.CREATED);
    }

    @GetMapping("/auth")
    public Principal getAuthorizedUser(Principal principal) {
        log.trace("request received at getAuthorizedUser");
        return principal;
    }
}