package com.pocketpay.businessdetails.service;

import com.pocketpay.businessdetails.dto.BusinessDetailsDTO;
import com.pocketpay.businessdetails.entity.BusinessDetails;
import com.pocketpay.businessdetails.exception.BusinessDetailsEntityException;
import com.pocketpay.businessdetails.mapper.BusinessDetailsMapper;
import com.pocketpay.businessdetails.repository.BusinessDetailsRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
@Transactional
public class BusinessServiceDetailsImpl implements BusinessDetailsService {

    @Autowired
    public BusinessDetailsRepository businessDetailsRepository;

    @Autowired
    public BusinessDetailsMapper businessDetailsMapper;

    @Override
    public List<BusinessDetailsDTO> findAll() {
        try {
            List<BusinessDetails> businessDetailsEntities = businessDetailsRepository.findAll();
            if (!businessDetailsEntities.isEmpty()) {
                log.info("Business Details entities found : {}", businessDetailsEntities.size());
                return businessDetailsEntities.stream()
                        .map(entity -> businessDetailsMapper.convertToBusinessDetailsDTO(entity))
                        .collect(Collectors.toList());
            } else {
                throw new BusinessDetailsEntityException("Business details not found");
            }
        } catch (Exception e) {
            log.error("Exception thrown: " + e.getMessage(), e);
            throw e;
        }
    }


    @Override
    public BusinessDetailsDTO findById(long id) {
        log.trace("request received at findById method in service layer");
        try {
            Optional<BusinessDetails> result = businessDetailsRepository.findById(id);
            if (result.isPresent()) {
                log.info("Business Details entity found");
                return businessDetailsMapper.convertToBusinessDetailsDTO(result.get());
            } else {
                log.error("Exception thrown: Business Details not found with id :{}", id);
                throw new BusinessDetailsEntityException("Business Details not found with given Id");
            }
        } catch (Exception e) {
            log.error("Exception thrown: " + e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public void save(BusinessDetailsDTO businessDetailsDTO) {
        log.trace("request received at save method in service layer");
        try {
            Optional<BusinessDetails> result = businessDetailsRepository.findById(businessDetailsDTO.getId());
            if (!result.isPresent()) {
                businessDetailsDTO.setId(businessDetailsDTO.getId());
                BusinessDetails obj = businessDetailsMapper.convertToBusinessDetailsEntity(businessDetailsDTO);
                businessDetailsRepository.save(obj);
            } else {
                log.error("Exception thrown: businessDetailsDTO with same id already present: {}", businessDetailsDTO.getId());
                throw new BusinessDetailsEntityException(String.format("businessDetailsDTO with same id already present %s", businessDetailsDTO.getId()));
            }
        } catch (Exception e) {
            log.error("Exception thrown: " + e.getMessage(), e);
            throw e;
        }
    }
}