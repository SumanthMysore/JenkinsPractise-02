package com.pocketpay.businessdetails.dto;

import com.pocketpay.businessdetails.enums.Role;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BusinessDetailsDTO {
    private long id;

    private String registrationNumber;

    private String name;

    private Role role;
}

