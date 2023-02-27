package com.pocketpay.businessdetails.dto;

import com.pocketpay.businessdetails.enums.Role;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
class BusinessDetailsDTOTest {

    @InjectMocks
    private BusinessDetailsDTO businessDetailsDTO;

    @Test
    void businessDetailsDTOTest(){
        businessDetailsDTO.setId(2000);
        businessDetailsDTO.setRegistrationNumber("2020ZEN5367GJ");
        businessDetailsDTO.setName("Zentech Solutions Pvt Ltd");
        businessDetailsDTO.setRole(Role.DIRECTOR);

        assertEquals(2000, businessDetailsDTO.getId());
        assertEquals("2020ZEN5367GJ", businessDetailsDTO.getRegistrationNumber());
        assertEquals("Zentech Solutions Pvt Ltd", businessDetailsDTO.getName());
        assertEquals(Role.DIRECTOR, businessDetailsDTO.getRole());
    }
}
