package com.pocketpay.businessdetails.service;

import com.pocketpay.businessdetails.dto.BusinessDetailsDTO;

import java.util.List;
public interface BusinessDetailsService {
    List<BusinessDetailsDTO> findAll();

    BusinessDetailsDTO findById(long id);

    void save(BusinessDetailsDTO businessDetailsDTO);
}
