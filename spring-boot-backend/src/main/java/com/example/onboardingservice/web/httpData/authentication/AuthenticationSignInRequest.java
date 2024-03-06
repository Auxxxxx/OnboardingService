package com.example.onboardingservice.web.httpData.authentication;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
@JsonIgnoreProperties(ignoreUnknown = true)
public class AuthenticationSignInRequest {
    @Schema(example = "bill_edwards@gmail.com")
    private String email;
    @Schema(example = "cookie123")
    private String password;
}
