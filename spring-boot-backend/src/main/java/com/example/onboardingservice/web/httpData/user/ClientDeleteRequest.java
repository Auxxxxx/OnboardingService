package com.example.onboardingservice.web.httpData.user;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class ClientDeleteRequest {
    @Schema(name = "email", description = "Email of the client to delete", example = "bill_edwards@gmail.com")
    private String email;
}
