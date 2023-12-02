package com.example.onboardingservice.exception;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class NoteCannotBeDeletedExcption extends Exception {
    public NoteCannotBeDeletedExcption(String message) {
        super(message);
    }
}