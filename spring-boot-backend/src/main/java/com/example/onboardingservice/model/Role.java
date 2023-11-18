package com.example.onboardingservice.model;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(example = "CLIENT")
public enum Role {
    MANAGER,
    CLIENT
}
