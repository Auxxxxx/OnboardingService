package com.example.onboardingservice.web.httpData.user;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class ClientUpdateRequest {
    @Schema(example = "bill_edwards@gmail.com")
    private String email;
    @Schema(example = "Bill Edwards")
    private String fullName;
    @Schema(example = "Male")
    private String gender;
    @Schema(example = "+125552228844")
    private String mobile;
}
