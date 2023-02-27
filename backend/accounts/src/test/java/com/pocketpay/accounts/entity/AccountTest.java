package com.pocketpay.accounts.entity;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class AccountTest {

    @InjectMocks
    private Account account1;

    @InjectMocks
    private Account account2;

    @Test
    void accountTest() {
        account1.setId(1000L);
        account1.setAccountNumber("123456885865");
        account1.setIfscNumber("ABFJ12929G");
        account1.setBalance(100000);

        account2 = new Account(1000L, "123456885865", "ABFJ12929G", 100000);

        assertEquals(account2.getId(), account1.getId());
        assertEquals(account2.getAccountNumber(), account1.getAccountNumber());
        assertEquals(account2.getIfscNumber(), account1.getIfscNumber());
        assertEquals(account2.getBalance(), account1.getBalance());
    }

}
