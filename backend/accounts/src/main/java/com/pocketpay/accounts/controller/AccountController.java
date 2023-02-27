package com.pocketpay.accounts.controller;

import com.pocketpay.accounts.dto.AccountDTO;
import com.pocketpay.accounts.service.AccountService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@Slf4j
@RequestMapping("/api/accounts")
public class AccountController {
    @Autowired
    private AccountService accountService;

    @GetMapping("/")
    public ResponseEntity<List<AccountDTO>> getAllAccounts() {
        log.trace("Request received at AccountController.getAllAccounts delegating request to AccountService.findAll");
        return new ResponseEntity<>(accountService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public  ResponseEntity<AccountDTO> getByAccountId(@PathVariable long id) {
        log.trace("request received at getByAccountId");
        return new ResponseEntity<>(accountService.findById(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AccountDTO> updateAccount(@PathVariable long id, @RequestBody @Valid AccountDTO accountDTO) {
        log.trace("request received at updateAccount");
        return new ResponseEntity<>(accountService.updateAccount(accountDTO), HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<String>  saveAccount(@RequestBody @Valid AccountDTO accountDTO){
        log.trace("Request received at - saveAccount method - AccountController controller - delegating request to service layer");
        accountService.save(accountDTO);
        return new ResponseEntity<>("Saved Account", HttpStatus.OK);
    }

}
