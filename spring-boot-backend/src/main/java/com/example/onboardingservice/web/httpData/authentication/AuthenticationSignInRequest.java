package com.example.onboardingservice.web.httpData.authentication;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class AuthenticationSignInRequest {
    @Schema(name = "email", description = "Client's email")
    private String email;
    @Schema(name = "password", description = "Client's password")
    private String password;
}
