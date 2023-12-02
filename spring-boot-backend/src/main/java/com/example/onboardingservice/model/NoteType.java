package com.example.onboardingservice.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@AllArgsConstructor
@Getter
@Schema(example = "MEETING_NOTES/USEFUL_INFO/CONTACT_DETAILS")
public enum NoteType {
    MEETING_NOTES("Greetings!", List.of("Thank you for working with us")),
    USEFUL_INFO("Useful info", List.of("Useful information has not been added yet...")),
    CONTACT_DETAILS("Contact details", List.of("Contact details have not been added yet..."));

    final String defaultHeader;
    final List<String> defaultContent;
}
