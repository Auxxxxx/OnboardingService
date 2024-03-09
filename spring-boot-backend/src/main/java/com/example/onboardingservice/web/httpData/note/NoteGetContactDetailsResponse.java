package com.example.onboardingservice.web.httpData.note;

import com.example.onboardingservice.model.Note;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
@JsonIgnoreProperties(ignoreUnknown = true)
public class NoteGetContactDetailsResponse {
    private Note contactDetails;
}
