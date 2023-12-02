package com.example.onboardingservice.web.httpData.note;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

import java.util.List;

@Data
@Builder
@Jacksonized
public class NotePutUsefulInfoRequest {
    @Schema(example = "[\"note line 1\",\"note line 2\"]")
    private List<String> content;
    @Schema(example = "bill_edwards@gmail.com")
    private String recipientEmail;
}
