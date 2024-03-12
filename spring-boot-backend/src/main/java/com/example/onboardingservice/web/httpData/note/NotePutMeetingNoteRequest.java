package com.example.onboardingservice.web.httpData.note;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

import java.util.List;

@Data
@Builder
@Jacksonized
@JsonIgnoreProperties(ignoreUnknown = true)
public class NotePutMeetingNoteRequest {
    private Long id;
    @Schema(example = "[\"note line 1\",\"note line 2\"]")
    private List<String> content;
    @Schema(example = "Useful info")
    private String header;
    @Schema(example = "2024-03-11")
    private String date;
}