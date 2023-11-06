package com.example.onboardingservice.exception;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class BranchNotFoundException extends Exception {
    public BranchNotFoundException(String message) {
        super(message);
    }
}