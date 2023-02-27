package com.pocketpay.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private long id;
    private String first_name;
    private String last_name;
    private String date_of_birth;
    private String mobile_number;
    private AddressDTO address;
}
