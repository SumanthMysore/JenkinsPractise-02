package com.pocketpay.transactions.controller;

import com.pocketpay.transactions.dto.TransactionDTO;
import com.pocketpay.transactions.mapper.TransactionMapper;
import com.pocketpay.transactions.service.TransactionService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/transactions")
public class TransactionController {
    @Autowired
    private TransactionService transactionService;

    @GetMapping("/")
    public ResponseEntity<List<TransactionDTO>> getAllTransactions() {
        log.trace("request received at getAllTransactions");
        return new ResponseEntity<>(transactionService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TransactionDTO> getByTransactionId(@PathVariable long id) {
        log.trace("request received at getByTransactionId");
        return new ResponseEntity<>(transactionService.findById(id), HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<String> saveTransaction(@RequestBody @Valid TransactionDTO transactionDTO) {
        log.trace("request received at saveTransaction");
        transactionService.registerTransaction(transactionDTO);
        return new ResponseEntity<>("Saved Transaction", HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TransactionDTO>  updateTransaction(@PathVariable long id, @RequestBody @Valid TransactionDTO transactionDTO) {
        log.trace("request received at updateTransaction");
        return new ResponseEntity<>(transactionService.updateTransaction(transactionDTO), HttpStatus.OK);
    }
}