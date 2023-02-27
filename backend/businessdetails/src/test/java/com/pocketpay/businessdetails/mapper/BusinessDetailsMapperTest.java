package com.pocketpay.businessdetails.mapper;

import com.pocketpay.businessdetails.dto.BusinessDetailsDTO;
import com.pocketpay.businessdetails.entity.BusinessDetails;
import com.pocketpay.businessdetails.enums.Role;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.modelmapper.ModelMapper;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class BusinessDetailsMapperTest {

    @InjectMocks
    private BusinessDetailsMapper businessDetailsMapper;
    @Mock
    private ModelMapper modelMapper;
    @Mock
    private BusinessDetails businessDetails;
    @Mock
    private BusinessDetailsDTO businessDetailsDTO;

    @BeforeEach
    void setup() {
        businessDetails = new BusinessDetails(2000,"2020ZEN5367GJ","Zentech Solutions Pvt Ltd", Role.DIRECTOR);
        businessDetailsDTO = new BusinessDetailsDTO(2000,"2020ZEN5367GJ","Zentech Solutions Pvt Ltd", Role.DIRECTOR);
    }

    @Test
    void convertToBusinessDetailsEntityTest() {
        Mockito.when(modelMapper.map(businessDetailsDTO, BusinessDetails.class)).thenReturn(businessDetails);
        BusinessDetails convertedBusinessDetails = businessDetailsMapper.convertToBusinessDetailsEntity(businessDetailsDTO);
        Assertions.assertEquals(convertedBusinessDetails.getId(), businessDetailsDTO.getId());
        Assertions.assertEquals(convertedBusinessDetails.getRegistrationNumber(), businessDetailsDTO.getRegistrationNumber());
        Assertions.assertEquals(convertedBusinessDetails.getName(), businessDetailsDTO.getName());
        Assertions.assertEquals(convertedBusinessDetails.getRole(), businessDetailsDTO.getRole());
    }

    @Test
    void convertToBusinessDetailsDTOTest() {
        Mockito.when(modelMapper.map(businessDetails, BusinessDetailsDTO.class)).thenReturn(businessDetailsDTO);
        BusinessDetailsDTO convertedBusinessDetailsDTO = businessDetailsMapper.convertToBusinessDetailsDTO(businessDetails);
        Assertions.assertEquals(convertedBusinessDetailsDTO.getId(), businessDetails.getId());
        Assertions.assertEquals(convertedBusinessDetailsDTO.getRegistrationNumber(), businessDetails.getRegistrationNumber());
        Assertions.assertEquals(convertedBusinessDetailsDTO.getName(), businessDetails.getName());
        Assertions.assertEquals(convertedBusinessDetailsDTO.getRole(), businessDetails.getRole());
    }

}
