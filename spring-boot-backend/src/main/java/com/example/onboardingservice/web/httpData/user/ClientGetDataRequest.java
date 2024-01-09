package com.example.onboardingservice.web.httpData.user;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class ClientGetDataRequest {
    private String email;
}

