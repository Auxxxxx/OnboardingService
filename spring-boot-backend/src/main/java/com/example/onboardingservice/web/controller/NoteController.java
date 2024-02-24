package com.example.onboardingservice.web.controller;

import com.example.onboardingservice.exception.WrongListSize;
import com.example.onboardingservice.exception.NoteNotFoundException;
import com.example.onboardingservice.exception.UserNotFoundException;
import com.example.onboardingservice.service.NoteService;
import com.example.onboardingservice.web.httpData.note.*;
import com.example.onboardingservice.web.util.RequestData;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@CrossOrigin(origins = "*", allowedHeaders = "*", maxAge = 3600)
@RestController
@RequestMapping(path = "/note", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
@Slf4j
@Tag(name = "Note", description = "Endpoints for CRUD operations on notes")
public class NoteController {
    private final NoteService noteService;

    @Operation(summary = "Get meeting notes", description = "Lists all meeting notes of the client")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Fetched successfully"),
            @ApiResponse(responseCode = "400", description = "Bad Request. Request field is null")
    })
    @GetMapping("/meeting-notes")
    public ResponseEntity<NoteGetMeetingNotesResponse> getMeetingNotes(
            @RequestBody(description = "Client email", required = true)
            @RequestData NoteGetUsefulInfoRequest request) {
        if (request.getEmail() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        log.info("returning_meeting_notes: " + request.getEmail());
        var meetingNotes = noteService.listMeetingNotes(request.getEmail());
        var response = NoteGetMeetingNotesResponse.builder()
                .meetingNotes(meetingNotes)
                .build();
        return ResponseEntity.ok(response);
    }

    @Operation(summary = "Get useful info", description = "Gets useful info of the client")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Fetched successfully"),
            @ApiResponse(responseCode = "400", description = "Bad Request. Request field is null"),
            @ApiResponse(responseCode = "404", description = "Not Found. This client does not have useful info")
    })
    @GetMapping("/useful-info")
    public ResponseEntity<NoteGetUsefulInfoResponse> getUsefulInfo(
            @RequestBody(description = "Client email", required = true)
            @RequestData NoteGetUsefulInfoRequest request) {
        if (request.getEmail() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        log.info("returning_useful_info: " + request.getEmail());
        try {
            var usefulInfo = noteService.getUsefulInfo(request.getEmail());
            var response = NoteGetUsefulInfoResponse.builder()
                    .usefulInfo(usefulInfo)
                    .build();
            return ResponseEntity.ok(response);
        } catch (NoteNotFoundException e) {
            log.error("useful_info_not_found: " + request.getEmail());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @Operation(summary = "Get contact details", description = "Gets contact detail info of the client")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Fetched successfully"),
            @ApiResponse(responseCode = "400", description = "Bad Request. Request field is null"),
            @ApiResponse(responseCode = "404", description = "Error. This client does not have contact details")
    })
    @GetMapping("/contact-details")
    public ResponseEntity<NoteGetContactDetailsResponse> getContactDetails(
            @RequestBody(description = "Client email", required = true)
            @RequestData NoteGetContactDetailsRequest request) {
        if (request.getEmail() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        log.info("returning_contact_details: " + request.getEmail());
        try {
            var contactDetails = noteService.getContactDetails(request.getEmail());
            var response = NoteGetContactDetailsResponse.builder()
                    .contactDetails(contactDetails)
                    .build();
            return ResponseEntity.ok(response);
        } catch (NoteNotFoundException e) {
            log.error("contact_details_not_found: " + request.getEmail());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @Operation(summary = "Save a meeting note", description = "Saves the meeting note created or edited by the manager.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Saved successfully"),
            @ApiResponse(responseCode = "400", description = "Bad Request. Request field is null"),
            @ApiResponse(responseCode = "404", description = "Not Found. The recipient client is not found")
    })
    @PutMapping("/meeting-notes")
    public ResponseEntity<Void> putMeetingNote(
            @RequestBody(description = """
                    Data of the note to be added
                    If noteId is specified - the note with this id is edited.
                    If noteId is null - a new one is saved
                    Content strings must be not null
                    """, required = true)
            @RequestData NotePutMeetingNoteRequest request) {
        if (request.getRecipientEmail() == null ||
                request.getHeader() == null ||
                request.getContent() == null ||
                request.getContent().stream().anyMatch(Objects::isNull)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        log.info("saving_meeting_note: " + request.getRecipientEmail());
        try {
            noteService.saveMeetingNote(
                    request.getId(),
                    request.getContent(),
                    request.getHeader(),
                    request.getRecipientEmail());
            return ResponseEntity.status(HttpStatus.OK).build();
        } catch (UserNotFoundException e) {
            log.error("recipient_not_found: " + request.getRecipientEmail());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @Operation(summary = "Save useful info",
            description = "Saves the useful info edited by the manager")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Saved successfully"),
            @ApiResponse(responseCode = "400", description = "Bad Request. Request field is null"),
            @ApiResponse(responseCode = "404", description = "Error. The recipient client is not found")
    })
    @PutMapping("/useful-info")
    public ResponseEntity<Void> putUsefulInfo(
            @RequestBody(description = "Data of the note to be edited. " +
                    "Content strings must be not null", required = true)
            @RequestData NotePutUsefulInfoRequest request) {
        if (request.getRecipientEmail() == null ||
                request.getContent() == null ||
                request.getContent().stream().anyMatch(Objects::isNull)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        log.info("saving_useful_info: " + request.getRecipientEmail());
        try {
            noteService.saveUsefulInfo(
                    request.getRecipientEmail(),
                    request.getContent());
            return ResponseEntity.status(HttpStatus.OK).build();
        } catch (UserNotFoundException e) {
            log.error("recipient_not_found: " + request.getRecipientEmail());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @Operation(summary = "Save contact details",
            description = "Saves the contact details edited by the manager")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Saved successfully"),
            @ApiResponse(responseCode = "400", description = "Bad Request. Request field is null"),
            @ApiResponse(responseCode = "404", description = "Error. The recipient client is not found")
    })
    @PutMapping("/contact-details")
    public ResponseEntity<Void> putContactDetails(
            @RequestBody(description = "Data of the note to be edited. " +
                    "Content strings must be not null", required = true)
            @RequestData NotePutContactDetailsRequest request) {
        if (request.getRecipientEmail() == null ||
                request.getContent() == null ||
                request.getContent().stream().anyMatch(Objects::isNull)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        log.info("saving_contact_details: " + request.getRecipientEmail());
        try {
            noteService.saveContactDetails(
                    request.getRecipientEmail(),
                    request.getContent());
            return ResponseEntity.status(HttpStatus.OK).build();
        } catch (UserNotFoundException e) {
            log.error("recipient_not_found: " + request.getRecipientEmail());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @Operation(summary = "Delete meeting note", description = "Deletes the meeting note by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Deleted successfully"),
            @ApiResponse(responseCode = "400", description = "Error. " +
                    "This type of note cannot be deleted " +
                    "or a request field is null"),
            @ApiResponse(responseCode = "404", description = "Error. The note to delete is not found")

    })
    @DeleteMapping("/meeting-note")
    public ResponseEntity<NoteDeleteMeetingNoteResponse> deleteMeetingNote(
            @RequestBody(description = "Id of the meeting note to delete", required = true)
            @RequestData NoteDeleteMeetingNoteRequest request) {
        if (request.getId() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        log.info("deleting_meeting_note: " + request.getId());
        try {
            var meetingNotes = noteService.deleteMeetingNoteById(request.getId());
            var response = NoteDeleteMeetingNoteResponse.builder()
                    .meetingNotes(meetingNotes)
                    .build();
            return ResponseEntity.ok(response);
        } catch (NoteNotFoundException e) {
            log.error("meeting_note_not_found: " + request.getId());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (WrongListSize e) {
            log.error("note_cannot_be_deleted: " + request.getId());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
}