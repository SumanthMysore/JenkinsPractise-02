package com.pocketpay.transactions.mapper;

import com.pocketpay.transactions.dto.TransactionDTO;
import com.pocketpay.transactions.entity.Transaction;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class TransactionMapperTest {

    @InjectMocks
    TransactionMapper transactionMapper;

    @Mock
    ModelMapper modelMapper;

    @Mock
    Transaction transaction;

    @Mock
    TransactionDTO transactionDTO;

    @BeforeEach
    void setup() {
        transaction = new Transaction(1, 100, 200, 250,50, 300, 1);
        transactionDTO = new TransactionDTO(1, 100, 200, 250,50, 300, 1);
    }

    @Test
    void convertToTransactionEntityTest(){
        Mockito.when(modelMapper.map(transactionDTO, Transaction.class)).thenReturn(transaction);
        assertEquals(transactionMapper.convertToTransactionEntity(transactionDTO).getSenderAmount(),transaction.getSenderAmount());
 }

    @Test
    void convertToTransactionDTOTest() {
        Mockito.when(modelMapper.map(transaction, TransactionDTO.class)).thenReturn(transactionDTO);
        TransactionDTO convertedTransactionDetailsDTO = transactionMapper.convertToTransactionDTO(transaction);
        assertEquals(convertedTransactionDetailsDTO.getId(), transaction.getId());
        assertEquals(convertedTransactionDetailsDTO.getSenderAmount(), transaction.getSenderAmount());
    }
}