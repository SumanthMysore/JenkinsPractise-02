package com.pocketpay.accounts.service;

import com.pocketpay.accounts.dto.AccountDTO;
import com.pocketpay.accounts.entity.Account;
import com.pocketpay.accounts.exception.AccountEntityException;
import com.pocketpay.accounts.mapper.AccountMapper;
import com.pocketpay.accounts.repository.AccountRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
@Transactional
public class AccountServiceImpl implements AccountService {

    @Autowired
    public AccountRepository accountRepository;

    @Autowired
    public AccountMapper accountMapper;

    @Override
    public List<AccountDTO> findAll() {
        List<Account> accountEntities = accountRepository.findAll();

        try {
            if (!accountEntities.isEmpty()) {
                log.info("Business Details entities found: {}", accountEntities.size());
                return accountEntities.stream()
                        .map(entity -> accountMapper.convertToAccountDTO(entity))
                        .collect(Collectors.toList());
            } else {
                throw new AccountEntityException("Account not found");
            }
        } catch (Exception e) {
            log.error("Exception thrown: " + e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public AccountDTO findById(long id) {
        log.trace("request received at findById method in service layer");

        try {
            Optional<Account> result = accountRepository.findById(id);
            if (result.isPresent()) {
                log.info("Account entity found");
                return accountMapper.convertToAccountDTO(result.get());
            } else {
                throw new AccountEntityException("Account not found with given Id");
            }
        } catch (Exception e) {
            log.error("Exception thrown: " + e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public AccountDTO updateAccount(AccountDTO accountDTO) {
        try {
            Optional<Account> result = accountRepository.findById(accountDTO.getId());
            if (result.isPresent()) {
                accountDTO.setId(accountDTO.getId());
                accountRepository.save(accountMapper.convertToAccountEntity(accountDTO));
                return accountDTO;
            } else {
                throw new AccountEntityException(String.format("Account not found with id %s", accountDTO.getId()));
            }
        } catch (Exception e) {
            log.error("Exception thrown: " + e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public void save(AccountDTO accountDTO) {
        log.trace("request received at save method in service layer");
        try {
            Optional<Account> result = accountRepository.findById(accountDTO.getId());
            if (!result.isPresent()) {
                accountDTO.setId(accountDTO.getId());
                Account obj = accountMapper.convertToAccountEntity(accountDTO);
                accountRepository.save(obj);
            } else {
                throw new AccountEntityException(String.format("accountDTO with same id already present %s", accountDTO.getId()));
            }
        } catch (Exception e) {
            log.error("Exception thrown: " + e.getMessage(), e);
            throw e;
        }
    }
}
