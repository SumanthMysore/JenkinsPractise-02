package com.pocketpay.accounts.service;

import com.pocketpay.accounts.dto.AccountDTO;
import com.pocketpay.accounts.entity.Account;
import com.pocketpay.accounts.exception.AccountEntityException;
import com.pocketpay.accounts.mapper.AccountMapper;
import com.pocketpay.accounts.repository.AccountRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class AccountServiceTest {

    @InjectMocks
    private AccountService accountService = new AccountServiceImpl();
    @Mock
    private AccountRepository accountRepository;
    @Mock
    private AccountMapper accountMapper;
    @Mock
    private AccountDTO accountDTO;
    @Mock
    private Account account;

    @BeforeEach
    void setup() {
        account = new Account(1000L, "123456885865",  "ABFJ12929G", 100000);
        accountDTO = new AccountDTO(1000L, "123456885865",  "ABFJ12929G", 100000);
    }

    @Test
    void findAll() {
        List<Account> accounts = new ArrayList<>();
        accounts.add(account);
        Mockito.when(accountRepository.findAll()).thenReturn(accounts);
        assertEquals(1, accountRepository.findAll().size());
    }

    @Test
    void findByBusinessDetailsIdTest() {
        Mockito.when(accountRepository.findById(1000L)).thenReturn(Optional.ofNullable(account));
        assertEquals(account, accountRepository.findById(1000L).get());
    }

    @Test
    void updateAccountTest() {
        Mockito.when(accountRepository.findById(1000L)).thenReturn(Optional.of(account));
        Mockito.when(accountMapper.convertToAccountEntity(accountDTO)).thenReturn(account);
        Mockito.when(accountRepository.save(account)).thenReturn(account);
        assertEquals(account.getIfscNumber(), accountService.updateAccount(accountDTO).getIfscNumber());
    }

    @Test
    void saveBusinessDetailsTest() {
        accountService.save(accountDTO);
        assertEquals(1000, account.getId());
    }

}
