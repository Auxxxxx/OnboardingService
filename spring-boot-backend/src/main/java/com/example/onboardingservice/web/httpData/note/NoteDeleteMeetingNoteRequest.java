package com.example.onboardingservice.web.httpData.note;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class NoteDeleteMeetingNoteRequest {
    private Long id;
}
