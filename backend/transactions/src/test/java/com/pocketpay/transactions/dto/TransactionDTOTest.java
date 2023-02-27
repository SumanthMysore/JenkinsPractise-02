package com.pocketpay.transactions.dto;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class TransactionDTOTest {

    @InjectMocks
    TransactionDTO transaction;

    @Test
    void transactionDTOTest() {
        transaction = new TransactionDTO();
        transaction.setSenderAmount(100);
        transaction.setReceivedAmount(200);
        transaction.setGuranteedAmount(250);
        transaction.setTransferFee(50);
        transaction.setTotalFee(300);
        transaction.setStatus(1);

        assertEquals(100, transaction.getSenderAmount());
        assertEquals(200, transaction.getReceivedAmount());
        assertEquals(250, transaction.getGuranteedAmount());
        assertEquals(50, transaction.getTransferFee());
        assertEquals(300, transaction.getTotalFee());
        assertEquals(1, transaction.getStatus());
    }
}