package com.pocketpay.transactions.service;

import com.pocketpay.transactions.dto.TransactionDTO;
import com.pocketpay.transactions.entity.Transaction;
import com.pocketpay.transactions.exception.TransactionEntityException;
import com.pocketpay.transactions.mapper.TransactionMapper;
import com.pocketpay.transactions.repository.TransactionRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import javax.validation.Validator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
@Transactional
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private TransactionMapper transactionMapper;

    @Autowired
    private Validator validator;

    @Override
    public TransactionDTO findById(long transactionId) {
        log.trace("request received at findById method in service layer");
        Optional<Transaction> result = transactionRepository.findById(transactionId);
        if (result.isPresent()) {
            log.info("Transaction entity found");
            return transactionMapper.convertToTransactionDTO(result.get());
        } else {
            log.error("Exception thrown: Transaction not found with id :{}", transactionId);
            throw new TransactionEntityException("Transaction not found with given Id");
        }
    }

    @Override
    public List<TransactionDTO> findAll() {
        log.trace("request received at findAll method in service layer");
        List<Transaction> transactionEntities = transactionRepository.findAll();
        if (!transactionEntities.isEmpty()) {
            log.info("Business Details entities found : {}", transactionEntities.size());
            return transactionEntities.stream()
                    .map(entity -> transactionMapper.convertToTransactionDTO(entity))
                    .collect(Collectors.toList());
        } else {
            log.error("Exception thrown: Transaction not found");
            throw new TransactionEntityException("Transaction not found");
        }
    }

    @Override
    public TransactionDTO updateTransaction(TransactionDTO transaction) {
        Optional<Transaction> result = transactionRepository.findById(transaction.getId());
        if (result.isPresent()) {
            transaction.setId(transaction.getId());
            Transaction obj = transactionMapper.convertToTransactionEntity(transaction);
            transactionRepository.save(obj);
            return transaction;
        } else {
            log.error("Exception thrown: transaction not found with id: {}", transaction.getId());
            throw new TransactionEntityException(String.format("transaction not found with id %s", transaction.getId()));
        }
    }

    @Override
    public void registerTransaction(TransactionDTO transaction) {
        log.trace("request received at registerTransaction method in service layer");
        Optional<Transaction> result = transactionRepository.findById(transaction.getId());
        if (!result.isPresent()) {
            transaction.setId(transaction.getId());
            Transaction obj = transactionMapper.convertToTransactionEntity(transaction);
            transactionRepository.save(obj);
        } else {
            log.error("Exception thrown: transaction with same id already present: {}", transaction.getId());
            throw new TransactionEntityException(String.format("transaction with same id already present %s", transaction.getId()));
        }
    }
}
