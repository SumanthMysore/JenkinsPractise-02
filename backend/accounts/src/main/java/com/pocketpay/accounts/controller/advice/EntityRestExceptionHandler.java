package com.pocketpay.accounts.controller.advice;

import com.pocketpay.accounts.dto.ErrorResponseTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class EntityRestExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<ErrorResponseTemplate> handleException(Exception exception) {
        ErrorResponseTemplate errorResponse = new ErrorResponseTemplate();
        errorResponse.setStatus(HttpStatus.NOT_FOUND.value());
        errorResponse.setMessage(exception.getMessage());
        errorResponse.setTimeStamp(System.currentTimeMillis());
        return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
    }
}
