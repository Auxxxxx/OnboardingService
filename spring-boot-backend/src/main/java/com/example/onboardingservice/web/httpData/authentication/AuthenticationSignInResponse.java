package com.example.onboardingservice.web.httpData.authentication;

import com.example.onboardingservice.model.Role;
import com.example.onboardingservice.model.User;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class AuthenticationSignInResponse {
    private User user;
    private Role role;
}
