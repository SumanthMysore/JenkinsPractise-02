package com.pocketpay.transactions.exception;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class ErrorResponseTest {
    @InjectMocks
    private ErrorResponse errorResponse;

    @Test
    void errorResponseTests(){
        ErrorResponse errorResponseTest = new ErrorResponse(400, "test message", 150997);

        errorResponse.setMessage("test message");
        errorResponse.setStatus(400);
        errorResponse.setTimeStamp(150997);

        assertEquals(errorResponse.getMessage(), errorResponseTest.getMessage());
        assertEquals(errorResponse.getStatus(), errorResponseTest.getStatus());
        assertEquals(errorResponse.getTimeStamp(), errorResponseTest.getTimeStamp());
    }
}