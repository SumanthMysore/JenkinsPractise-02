package com.pocketpay.transactions.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TransactionDTO {

    private long id;

    private double senderAmount;

    private double receivedAmount;

    private double guranteedAmount;

    private double transferFee;

    private double totalFee;

    private int status;
}
