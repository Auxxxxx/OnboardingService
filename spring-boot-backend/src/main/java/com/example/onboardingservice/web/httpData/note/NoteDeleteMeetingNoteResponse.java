package com.example.onboardingservice.web.httpData.note;

import com.example.onboardingservice.model.Note;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

import java.util.List;

@Data
@Builder
@Jacksonized
public class NoteDeleteMeetingNoteResponse {
    private List<Note> meetingNotes;
}
