package com.pocketpay.businessdetails.repository;

import com.pocketpay.businessdetails.entity.BusinessDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BusinessDetailsRepository extends JpaRepository<BusinessDetails, Long> {

}