package com.pocketpay.transactions.service;

import com.pocketpay.transactions.dto.TransactionDTO;
import com.pocketpay.transactions.entity.Transaction;
import com.pocketpay.transactions.exception.TransactionEntityException;
import com.pocketpay.transactions.mapper.TransactionMapper;
import com.pocketpay.transactions.repository.TransactionRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import javax.validation.Validator;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class TransactionServiceImplTest {
    @InjectMocks
    TransactionService transactionService = new TransactionServiceImpl();

    @Mock
    TransactionMapper transactionMapper;

    @Mock
    Transaction transaction;

    @Mock
    TransactionDTO transactionDTO;

    @Mock
    TransactionRepository transactionRepository;

    @Mock
    Validator validator;

    @BeforeEach
    void setup() {
        transaction = new Transaction(1, 100, 200, 250, 50, 300, 1);
        transactionDTO = new TransactionDTO(1, 100, 200, 250, 50, 300, 1);
    }

    @Test
    void findAll() {
        List<Transaction> transactions = new ArrayList<>();
        transactions.add(transaction);
        Mockito.when(transactionRepository.findAll()).thenReturn(transactions);
        assertEquals(1, transactionRepository.findAll().size());
    }

    @Test
    void findByIdSuccessTest() {
        Mockito.when(transactionRepository.findById(1L)).thenReturn(Optional.ofNullable(transaction));
        assertEquals(transaction, transactionRepository.findById(1L).get());
    }

    @Test
    void registerTransactionTest() {
        transactionRepository.save(transaction);
        assertEquals(1, transaction.getId());
    }

    @Test
    void updateTransactionTest() {
        Mockito.when(transactionRepository.findById(1L)).thenReturn(Optional.of(transaction));
        Mockito.when(transactionMapper.convertToTransactionEntity(transactionDTO)).thenReturn(transaction);
        Mockito.when(transactionRepository.save(transaction)).thenReturn(transaction);
        assertEquals(transaction.getSenderAmount(), transactionService.updateTransaction(transactionDTO).getSenderAmount());
    }

    @Test
    void updateTransactionExceptionTest() {
        Mockito.when(transactionRepository.findById(1L)).thenReturn(Optional.empty());
        RuntimeException thrown = assertThrows(TransactionEntityException.class, () -> transactionService.updateTransaction(transactionDTO));
        assertEquals(("transaction not found with id 1"), thrown.getMessage());
    }

}