package com.example.onboardingservice.web.httpData.user;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class ClientIsFormFilledResponse {
    @Schema(example = "true")
    private Boolean isFormFilled;
}