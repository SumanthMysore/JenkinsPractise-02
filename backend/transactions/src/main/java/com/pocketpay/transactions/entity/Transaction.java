package com.pocketpay.transactions.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import lombok.*;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "transaction_details")
public class Transaction {

    @NotNull
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "sender_amount")
    private double senderAmount;

    @Column(name = "received_amount")
    private double receivedAmount;

    @Column(name = "guranteed_amount")
    private double guranteedAmount;

    @Column(name = "transfer_fee")
    private double transferFee;

    @Column(name = "total_fee")
    private double totalFee;

    @Column(name = "status")
    private int status;
}
