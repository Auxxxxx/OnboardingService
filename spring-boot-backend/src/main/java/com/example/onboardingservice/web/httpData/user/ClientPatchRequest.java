package com.example.onboardingservice.web.httpData.user;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

import java.util.List;

@Data
@Builder
@Jacksonized
public class ClientPatchRequest {
    @Schema(example = "bill_edwards@gmail.com")
    private String email;
    @Schema(example = "Bill Edwards")
    private String fullName;
    @Schema(example = "[\"answer 1\",\"answer 2\",...]")
    private List<String> formAnswers;
    @Schema(example = "[\"stage 1\",\"stage 2\",...]")
    private List<String> onboardingStages;
    @Schema(example = "1")
    private Long activeStage;
}
