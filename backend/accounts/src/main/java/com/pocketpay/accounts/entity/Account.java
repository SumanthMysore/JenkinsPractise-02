package com.pocketpay.accounts.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="account")
public class Account {

    @Id
    @NotNull
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="account_number")
    private String accountNumber;

    @Column(name="ifsc_number" )
    private String ifscNumber;

    @Column(name="balance" )
    private float balance;
}
