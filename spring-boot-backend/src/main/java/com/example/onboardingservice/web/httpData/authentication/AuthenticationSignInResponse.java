package com.example.onboardingservice.web.httpData.authentication;

import com.example.onboardingservice.model.Client;
import com.example.onboardingservice.model.Role;
import com.example.onboardingservice.model.User;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class AuthenticationSignInResponse {
    @Schema(name = "user", description = "User's data")
    private User user;
    @Schema(name = "role", description = "User's role")
    private Role role;
}
