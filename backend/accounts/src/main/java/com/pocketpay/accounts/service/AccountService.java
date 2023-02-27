package com.pocketpay.accounts.service;

import com.pocketpay.accounts.dto.AccountDTO;
import java.util.List;

public interface AccountService {
    List<AccountDTO> findAll();

    AccountDTO findById(long id);

    AccountDTO updateAccount(AccountDTO accountDTO);

    void save(AccountDTO accountDTO);
}
