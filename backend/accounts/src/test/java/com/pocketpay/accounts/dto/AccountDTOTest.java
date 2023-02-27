package com.pocketpay.accounts.dto;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
class AccountDTOTest {

    @InjectMocks
    private AccountDTO accountDTO;

    @Test
    void businessDetailsDTOTest() {
        accountDTO.setId(1000L);
        accountDTO.setAccountNumber("123456885865");
        accountDTO.setIfscNumber("ABFJ12929G");
        accountDTO.setBalance(100000);

        assertEquals(1000L, accountDTO.getId());
        assertEquals("123456885865", accountDTO.getAccountNumber());
        assertEquals("ABFJ12929G", accountDTO.getIfscNumber());
        assertEquals(100000, accountDTO.getBalance());
    }
}
