package com.pocketpay.accounts.controller;

import com.pocketpay.accounts.dto.AccountDTO;
import com.pocketpay.accounts.dto.ErrorResponseTemplate;
import com.pocketpay.accounts.entity.Account;
import com.pocketpay.accounts.mapper.AccountMapper;
import com.pocketpay.accounts.service.AccountService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
class AccountControllerTest {

    @Autowired
    private WebApplicationContext webApplicationContext;

    @MockBean
    private AccountService accountService;

    @MockBean
    private AccountMapper accountMapper;

    @Mock
    private Account account;

    @Mock
    private AccountDTO accountDTO;

    @Mock
    private ErrorResponseTemplate responseTemplate;

    @BeforeEach
    void setup() {
        account = new Account(1000, "123456885865", "ABFJ12929G", 100000);
        accountDTO = new AccountDTO();
    }

    @Test
    void getAllAccounts() throws Exception {
        List<AccountDTO> accountDTOs = new ArrayList<>();
        accountDTOs.add(accountDTO);
        when(accountService.findAll()).thenReturn(accountDTOs);
        MockMvc mockMvc = MockMvcBuilders.webAppContextSetup(this.webApplicationContext).build();
        mockMvc.perform(get("/api/accounts/")).andExpect(status().is(200));
    }

    @Test
    void getByAccountIdTest() throws Exception {
        accountDTO = new AccountDTO(1000, "123456885865", "ABFJ12929G", 100000);
        Mockito.when(this.accountService.findById(1000)).thenReturn(accountDTO);
        MockMvc mockMvc = MockMvcBuilders.webAppContextSetup(this.webApplicationContext).build();
        mockMvc.perform(get("/api/accounts/1000")).andExpect(status().is(200));
    }

    @Test
    void saveAccountTest() throws Exception {
        accountDTO = new AccountDTO(1000, "123456885865", "ABFJ12929G", 100000);
        MockMvc mockMvc = MockMvcBuilders.webAppContextSetup(this.webApplicationContext).build();
        mockMvc.perform(post("/api/accounts/").contentType(MediaType.APPLICATION_JSON)
                .content(String.valueOf(accountDTO))).andExpect(status().is(400));
    }

    @Test
    void updateAccountTest() throws Exception {
        accountDTO = new AccountDTO(1001, "123456885865", "ABFJ12929G", 100000);
        MockMvc mockMvc = MockMvcBuilders.webAppContextSetup(this.webApplicationContext).build();
        mockMvc.perform(put("/api/accounts/1001").contentType(MediaType.APPLICATION_JSON)
                .content(String.valueOf(account))).andExpect(status().is(400));
    }

}
