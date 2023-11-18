package com.example.onboardingservice.web.httpData.authentication;

import com.example.onboardingservice.model.Client;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

import java.util.List;

@Data
@Builder
@Jacksonized
public class AuthenticationRegisterRequest {
    @Schema(name = "email", description = "Client's email", example = "bill_edwards@gmail.com")
    private String email;
    @Schema(name = "password", description = "Client's password", example = "cookie12345")
    private String password;
    @Schema(name = "full name", description = "Client's full name", example = "Bill Edwards")
    private String fullName;

}
