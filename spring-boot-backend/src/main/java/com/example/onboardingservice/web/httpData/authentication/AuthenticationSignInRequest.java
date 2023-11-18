package com.example.onboardingservice.web.httpData.authentication;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class AuthenticationSignInRequest {
    @Schema(example = "bill_edwards@gmail.com")
    private String email;
    @Schema(example = "cookie123")
    private String password;
}
