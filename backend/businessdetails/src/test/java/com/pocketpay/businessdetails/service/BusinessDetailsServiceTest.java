package com.pocketpay.businessdetails.service;

import com.pocketpay.businessdetails.entity.BusinessDetails;
import com.pocketpay.businessdetails.enums.Role;
import com.pocketpay.businessdetails.exception.BusinessDetailsEntityException;
import com.pocketpay.businessdetails.repository.BusinessDetailsRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class BusinessDetailsServiceTest {

    @InjectMocks
    private BusinessDetailsService businessDetailsService = new BusinessServiceDetailsImpl();
    @Mock
    private BusinessDetailsRepository businessDetailsRepository;

    @Mock
    private BusinessDetails businessDetails;

    @BeforeEach
    void setup() {
        businessDetails = new BusinessDetails(2000L, "2020ZEN5367GJ", "Zentech Solutions Pvt Ltd", Role.DIRECTOR);
    }

    @Test
    void findAll() {
        List<BusinessDetails> businessDetail = new ArrayList<>();
        businessDetail.add(businessDetails);
        Mockito.when(businessDetailsRepository.findAll()).thenReturn(businessDetail);
        assertEquals(1, businessDetailsRepository.findAll().size());
    }

    @Test
    void findByBusinessDetailsIdTest() {
        businessDetails = new BusinessDetails(2000L, "2020ZEN5367GJ", "Zentech Solutions Pvt Ltd", Role.DIRECTOR);
        Mockito.when(businessDetailsRepository.findById(2000L)).thenReturn(Optional.ofNullable(businessDetails));
        assertEquals(businessDetails, businessDetailsRepository.findById(2000L).get());
    }

    @Test
    void saveBusinessDetailsTest() {
        businessDetails = new BusinessDetails(2001L, "2020ZEN5367GJ", "Zentech Solutions Pvt Ltd", Role.DIRECTOR);
        businessDetailsRepository.save(businessDetails);
        assertEquals(2001L, businessDetails.getId());
    }

}
