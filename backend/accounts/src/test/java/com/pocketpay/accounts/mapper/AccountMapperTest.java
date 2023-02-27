package com.pocketpay.accounts.mapper;

import com.pocketpay.accounts.dto.AccountDTO;
import com.pocketpay.accounts.entity.Account;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.modelmapper.ModelMapper;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
class AccountMapperTest {

    @InjectMocks
    private AccountMapper accountMapper;
    @Mock
    private ModelMapper modelMapper;
    @Mock
    private Account account;
    @Mock
    private AccountDTO accountDTO;

    @BeforeEach
    void setup() {
        account = new Account(1000L, "123456885865", "ABFJ12929G", 100000);
        accountDTO = new AccountDTO(1000L, "123456885865",  "ABFJ12929G", 100000);
    }

    @Test
    void convertToAccountEntityTest() {
        Mockito.when(modelMapper.map(accountDTO, Account.class)).thenReturn(account);
        Account convertedAccountDetails = accountMapper.convertToAccountEntity(accountDTO);
        Assertions.assertEquals(convertedAccountDetails.getId(), accountDTO.getId());
        Assertions.assertEquals(convertedAccountDetails.getAccountNumber(), accountDTO.getAccountNumber());
        Assertions.assertEquals(convertedAccountDetails.getIfscNumber(), accountDTO.getIfscNumber());
        Assertions.assertEquals(convertedAccountDetails.getBalance(), accountDTO.getBalance());
    }

    @Test
    void convertToAccountDTOTest() {
        Mockito.when(modelMapper.map(account, AccountDTO.class)).thenReturn(accountDTO);
        AccountDTO convertedAccountDetailsDTO = accountMapper.convertToAccountDTO(account);
        Assertions.assertEquals(convertedAccountDetailsDTO.getId(), account.getId());
        Assertions.assertEquals(convertedAccountDetailsDTO.getAccountNumber(), account.getAccountNumber());
        Assertions.assertEquals(convertedAccountDetailsDTO.getIfscNumber(), account.getIfscNumber());
        Assertions.assertEquals(convertedAccountDetailsDTO.getBalance(), account.getBalance());
    }
}
