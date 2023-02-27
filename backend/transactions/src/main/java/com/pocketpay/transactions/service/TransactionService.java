package com.pocketpay.transactions.service;


import com.pocketpay.transactions.dto.TransactionDTO;
import com.pocketpay.transactions.entity.Transaction;

import java.util.List;

public interface TransactionService {

    TransactionDTO findById(long transactionId);

    List<TransactionDTO> findAll();

    TransactionDTO updateTransaction(TransactionDTO transactionDTO);

    void registerTransaction(TransactionDTO transactionDTO);
}
