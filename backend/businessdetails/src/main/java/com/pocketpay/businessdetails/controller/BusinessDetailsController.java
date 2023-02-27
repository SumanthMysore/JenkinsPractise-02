package com.pocketpay.businessdetails.controller;

import com.pocketpay.businessdetails.dto.BusinessDetailsDTO;
import com.pocketpay.businessdetails.service.BusinessDetailsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@Slf4j
@RequestMapping("/api/businessdetails")
public class BusinessDetailsController {

    @Autowired
    private BusinessDetailsService businessDetailsService;

    @GetMapping("/")
    public ResponseEntity<List<BusinessDetailsDTO>> getAllBusinessDetails() {
        log.trace("Request received at BusinessDetailsController.getAllBusinessDetails delegating request to BusinessDetailsService.findAll");
        return new ResponseEntity<>(businessDetailsService.findAll(), HttpStatus.OK);

    }

    @GetMapping("/{id}")
    public ResponseEntity<BusinessDetailsDTO> getByAccountId(@PathVariable long id) {
        log.trace("request received at getByAccountId");
        return new ResponseEntity<>(businessDetailsService.findById(id), HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<String> saveBusinessDetails(@RequestBody @Valid BusinessDetailsDTO businessDetailsDTO){
        log.trace("Request received at - saveTransaction method - BusinessDetailsController controller - delegating request to service layer");
        businessDetailsService.save(businessDetailsDTO);
        return new ResponseEntity<>("Saved Business Details", HttpStatus.OK);
    }
}
