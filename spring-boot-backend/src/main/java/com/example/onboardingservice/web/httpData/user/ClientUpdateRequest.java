package com.example.onboardingservice.web.httpData.user;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class ClientUpdateRequest {
    @Schema(name = "email", description = "Email of the client to update", example = "bill_edwards@gmail.com")
    private String email;
    @Schema(name = "full name", description = "Client's full name", example = "Bill Edwards")
    private String fullName;
    @Schema(name = "gender", description = "Client's gender", example = "Male")
    private String gender;
    @Schema(name = "mobile", description = "Client's mobile number", example = "+125552228844")
    private String mobile;
}
