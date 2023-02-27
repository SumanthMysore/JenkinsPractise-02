package com.pocketpay.accounts.entity;

import com.pocketpay.accounts.dto.ErrorResponseTemplate;
import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
class ResponseTemplateTest {

    @InjectMocks
    private ErrorResponseTemplate template1;

    @InjectMocks
    private ErrorResponseTemplate template2;

    @Test
    public void responseTemplate(){
        template1 = new ErrorResponseTemplate(HttpStatus.ACCEPTED.value(), "Business Details successfully updated", System.currentTimeMillis());
        template2 = new ErrorResponseTemplate();

        template2.setStatus(template1.getStatus());
        template2.setMessage(template1.getMessage());
        template2.setTimeStamp(template1.getTimeStamp());

        assertEquals(template2.getStatus(), template1.getStatus());
        assertEquals(template2.getMessage(), template1.getMessage());
        assertEquals(template2.getTimeStamp(), template1.getTimeStamp());
    }
}