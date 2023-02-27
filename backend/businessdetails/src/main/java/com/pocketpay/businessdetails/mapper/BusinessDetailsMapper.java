package com.pocketpay.businessdetails.mapper;

import com.pocketpay.businessdetails.dto.BusinessDetailsDTO;
import com.pocketpay.businessdetails.entity.BusinessDetails;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BusinessDetailsMapper {
    @Autowired
    private ModelMapper modelMapper;

    public BusinessDetails convertToBusinessDetailsEntity(BusinessDetailsDTO businessDTO){
        return modelMapper.map(businessDTO, BusinessDetails.class);
    }
    public BusinessDetailsDTO convertToBusinessDetailsDTO(BusinessDetails businessDetails){
        return modelMapper.map(businessDetails, BusinessDetailsDTO.class);
    }

}
