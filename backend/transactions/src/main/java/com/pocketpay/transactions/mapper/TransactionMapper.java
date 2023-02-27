package com.pocketpay.transactions.mapper;

import com.pocketpay.transactions.dto.TransactionDTO;
import com.pocketpay.transactions.entity.Transaction;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransactionMapper {

    @Autowired
    private ModelMapper modelMapper;

    public Transaction convertToTransactionEntity(TransactionDTO transactionDTO) {
        return modelMapper.map(transactionDTO, Transaction.class);
    }

    public TransactionDTO convertToTransactionDTO(Transaction transaction) {
        return modelMapper.map(transaction, TransactionDTO.class);
    }
}