package com.example.onboardingservice.exception;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class WrongPasswordException extends LogInException {
    public WrongPasswordException(String message) {
        super(message);
    }
}