package com.example.onboardingservice.web.httpData.note;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class NoteGetUsefulInfoRequest {
    @Schema(example = "bill_edwards@gmail.com")
    private String email;
}
