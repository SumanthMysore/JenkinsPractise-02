package com.pocketpay.businessdetails.controller;

import com.pocketpay.businessdetails.dto.BusinessDetailsDTO;
import com.pocketpay.businessdetails.dto.ErrorResponseTemplate;
import com.pocketpay.businessdetails.entity.BusinessDetails;
import com.pocketpay.businessdetails.enums.Role;
import com.pocketpay.businessdetails.mapper.BusinessDetailsMapper;
import com.pocketpay.businessdetails.service.BusinessDetailsService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
@SpringBootTest
class BusinessDetailsControllerTest {
    @Autowired
    private WebApplicationContext webApplicationContext;

    @MockBean
    private BusinessDetailsService businessDetailsService;

    @MockBean
    private BusinessDetailsMapper businessDetailsMapper;

    @Mock
    private BusinessDetails businessDetail;

    @Mock
    private BusinessDetailsDTO businessDetailsDTO;

    @Mock
    private ErrorResponseTemplate responseTemplate;

    @BeforeEach
    void setup(){
        businessDetail = new BusinessDetails(2000,"2020ZEN5367GJ","Zentech Solutions Pvt Ltd", Role.DIRECTOR);
        businessDetailsDTO = new BusinessDetailsDTO();
    }

    @Test
    void getAllBusinessDetails() throws Exception{
        List<BusinessDetailsDTO> businessDetailsDTOS = new ArrayList<>();
        businessDetailsDTOS.add(businessDetailsDTO);
        when(businessDetailsService.findAll()).thenReturn(businessDetailsDTOS);
        MockMvc mockMvc = MockMvcBuilders.webAppContextSetup(this.webApplicationContext).build();
        mockMvc.perform(get("/api/businessdetails/")).andExpect(status().is(200));
    }

    @Test
    void getByBusinessDetailsIdTest() throws Exception {
        businessDetailsDTO = new BusinessDetailsDTO(2000,"2020ZEN5367GJ","Zentech Solutions Pvt Ltd", Role.DIRECTOR);

        Mockito.when(this.businessDetailsService.findById(2000)).thenReturn(businessDetailsDTO);
        MockMvc mockMvc = MockMvcBuilders.webAppContextSetup(this.webApplicationContext).build();
        mockMvc.perform(get("/api/businessdetails/2000")).andExpect(status().is(200));
    }

    @Test
    void saveBusinessDetailsTest() throws Exception {
        businessDetailsDTO = new BusinessDetailsDTO(2001,"2020ZEN5367GJ","Zentech Solutions Pvt Ltd", Role.DIRECTOR);

        MockMvc mockMvc = MockMvcBuilders.webAppContextSetup(this.webApplicationContext).build();
        mockMvc.perform(post("/api/businessdetails/").contentType(MediaType.APPLICATION_JSON)
                .content(String.valueOf(businessDetailsDTO))).andExpect(status().is(400));
    }

}
