package com.pocketpay.accounts.mapper;

import com.pocketpay.accounts.dto.AccountDTO;
import com.pocketpay.accounts.entity.Account;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountMapper {
    @Autowired
    private ModelMapper modelMapper;

    public Account convertToAccountEntity(AccountDTO accountDTO) {
        return modelMapper.map(accountDTO, Account.class);
    }

    public AccountDTO convertToAccountDTO(Account account) {
        return modelMapper.map(account, AccountDTO.class);
    }
}
