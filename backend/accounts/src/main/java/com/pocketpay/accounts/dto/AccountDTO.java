package com.pocketpay.accounts.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AccountDTO {
    private long id;

    private String accountNumber;

    private String ifscNumber;

    private float balance;
}
