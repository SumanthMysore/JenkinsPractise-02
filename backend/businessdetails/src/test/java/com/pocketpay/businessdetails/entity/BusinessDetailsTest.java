package com.pocketpay.businessdetails.entity;

import com.pocketpay.businessdetails.enums.Role;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class BusinessDetailsTest {

    @InjectMocks
    private BusinessDetails businessDetails1;

    @InjectMocks
    private BusinessDetails businessDetails2;

    @Test
    void businessDetailsTest(){
       businessDetails1.setId(2000);
       businessDetails1.setRegistrationNumber("2020ZEN5367GJ");
       businessDetails1.setName("Zentech Solutions Pvt Ltd");
       businessDetails1.setRole(Role.DIRECTOR);

        businessDetails2 = new BusinessDetails(2000,"2020ZEN5367GJ","Zentech Solutions Pvt Ltd", Role.DIRECTOR);

        assertEquals(businessDetails2.getId(), businessDetails1.getId());
        assertEquals(businessDetails2.getRegistrationNumber(), businessDetails1.getRegistrationNumber());
        assertEquals(businessDetails2.getName(), businessDetails1.getName());
        assertEquals(businessDetails2.getRole(), businessDetails1.getRole());
    }
}
