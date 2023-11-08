package com.example.onboardingservice.exception;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class ATMNotFoundException extends Exception {
    public ATMNotFoundException(String message) {
        super(message);
    }
}