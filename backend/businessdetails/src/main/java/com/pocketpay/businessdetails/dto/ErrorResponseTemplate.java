package com.pocketpay.businessdetails.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ErrorResponseTemplate {
    private int status;
    private String message;
    private long timeStamp;
}