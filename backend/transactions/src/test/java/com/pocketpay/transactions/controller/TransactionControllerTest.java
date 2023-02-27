package com.pocketpay.transactions.controller;

import com.pocketpay.transactions.dto.TransactionDTO;
import com.pocketpay.transactions.entity.Transaction;
import com.pocketpay.transactions.service.TransactionService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
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
class TransactionControllerTest {

    @Autowired
    WebApplicationContext context;

    @MockBean
    TransactionService transactionService;

    @Mock
    Transaction transaction;

    @Mock
    TransactionDTO transactionDTO;

    @BeforeEach
    void setup(){
        transactionDTO = new TransactionDTO(1, 100, 200, 250, 50, 300, 1);
        transaction = new Transaction(1, 100, 200, 250, 50, 300, 1);
    }

    @Test
    void getAllTransactions() throws Exception {
        List<TransactionDTO> transactionDTOs = new ArrayList<>();
        transactionDTOs.add(transactionDTO);
        when(transactionService.findAll()).thenReturn(transactionDTOs);
        MockMvc mockMvc = MockMvcBuilders.webAppContextSetup(this.context).build();
        mockMvc.perform(get("/api/transactions/")).andExpect(status().is(200));
    }
    @Test
    void getByTransactionIdTest() throws Exception {
        when(this.transactionService.findById(1)).thenReturn(transactionDTO);
        MockMvc mockMvc = MockMvcBuilders.webAppContextSetup(this.context).build();
        mockMvc.perform(get("/api/transactions/1")).andExpect(status().is(200));
    }

    @Test
    void registerTransactionTest() throws Exception {
        MockMvc mockMvc = MockMvcBuilders.webAppContextSetup(this.context).build();
        mockMvc.perform(post("/api/transactions/").contentType(MediaType.APPLICATION_JSON)
                .content(String.valueOf(transactionDTO))).andExpect(status().is(400));
    }

    @Test
    void updateTransactionTest() throws Exception {
        MockMvc mockMvc = MockMvcBuilders.webAppContextSetup(this.context).build();
        mockMvc.perform(put("/api/transactions/1").contentType(MediaType.APPLICATION_JSON)
                .content(String.valueOf(transaction))).andExpect(status().is(400));
    }
}