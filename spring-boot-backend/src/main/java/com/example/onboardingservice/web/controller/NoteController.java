package com.example.onboardingservice.web.controller;

import com.example.onboardingservice.exception.NoteCannotBeDeletedExcption;
import com.example.onboardingservice.exception.NoteNotFoundException;
import com.example.onboardingservice.exception.UserNotFoundException;
import com.example.onboardingservice.model.Client;
import com.example.onboardingservice.model.Note;
import com.example.onboardingservice.model.NoteType;
import com.example.onboardingservice.service.NoteService;
import com.example.onboardingservice.service.UserService;
import com.example.onboardingservice.web.httpData.note.*;
import com.example.onboardingservice.web.httpData.user.ClientDeleteResponse;
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

import java.time.LocalDate;

@RestController
@RequestMapping(path = "/note", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
@Slf4j
@Tag(name = "Note", description = "Endpoints for CRUD operations on notes")
public class NoteController {
    private final NoteService noteService;
    private final UserService userService;

    @Operation(summary = "Get meeting notes", description = "Lists all meeting notes of the client")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Fetched successfully")
    })
    @GetMapping("/meeting-notes")
    public ResponseEntity<NoteGetMeetingNotesResponse> getMeetingNotes(
            @RequestData NoteGetUsefulInfoRequest request) {
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
            @ApiResponse(responseCode = "404", description = "Error. This client does not have useful info")
    })
    @GetMapping("/useful-info")
    public ResponseEntity<NoteGetUsefulInfoResponse> getUsefulInfo(
            @RequestData NoteGetUsefulInfoRequest request) {
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
            @ApiResponse(responseCode = "404", description = "Error. This client does not have contact details")
    })
    @GetMapping("/contact-details")
    public ResponseEntity<NoteGetContactDetailsResponse> getContactDetails(
            @RequestData NoteGetContactDetailsRequest request) {
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
            @ApiResponse(responseCode = "404", description = "Error. The recipient client is not found")
    })
    @PutMapping("/meeting-notes")
    public ResponseEntity<Void> putMeetingNote(
            @RequestBody(description = """
                    If noteId is specified - the note with this id is edited.
                    If noteId is null - a new one is saved""", required = true)
            @RequestData NotePutMeetingNoteRequest request) {
        log.info("saving_meeting_note: " + request.getRecipientEmail());
        try {
            var recipient = (Client) userService.findByEmail(request.getRecipientEmail());
            var note = Note.builder()
                    .recipient(recipient)
                    .header(request.getHeader())
                    .content(request.getContent())
                    .date(LocalDate.now())
                    .noteType(NoteType.MEETING_NOTES)
                    .build();
            if (request.getId() != null) {
                note.setId(request.getId());
            }
            noteService.save(note);
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
            @ApiResponse(responseCode = "404", description = "Error. The recipient client is not found")
    })
    @PutMapping("/useful-info")
    public ResponseEntity<Void> putUsefulInfo(
            @RequestData NotePutUsefulInfoRequest request) {
        log.info("saving_useful_info: " + request.getRecipientEmail());
        try {
            var recipient = (Client) userService.findByEmail(request.getRecipientEmail());
            var note = noteService.buildDefaultNote(NoteType.USEFUL_INFO, recipient);
            note.setContent(request.getContent());
            noteService.save(note);
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
            @ApiResponse(responseCode = "404", description = "Error. The recipient client is not found")
    })
    @PutMapping("/contact-details")
    public ResponseEntity<Void> putContactDetails(
            @RequestData NotePutContactDetailsRequest request) {
        log.info("saving_contact_details: " + request.getRecipientEmail());
        try {
            var recipient = (Client) userService.findByEmail(request.getRecipientEmail());
            var note = noteService.buildDefaultNote(NoteType.CONTACT_DETAILS, recipient);
            note.setContent(request.getContent());
            noteService.save(note);
            return ResponseEntity.status(HttpStatus.OK).build();
        } catch (UserNotFoundException e) {
            log.error("recipient_not_found: " + request.getRecipientEmail());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @Operation(summary = "Delete meeting note", description = "Deletes the meeting note by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Deleted successfully"),
            @ApiResponse(responseCode = "400", description = "Error. This type of note cannot be deleted"),
            @ApiResponse(responseCode = "404", description = "Error. The note to delete is not found")

    })
    @DeleteMapping("/meeting-note")
    public ResponseEntity<NoteDeleteMeetingNoteResponse> deleteMeetingNote(
            @RequestBody(description = "Id of the meeting note to delete", required = true)
            @RequestData NoteDeleteMeetingNoteRequest request) {
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
        } catch (NoteCannotBeDeletedExcption e) {
            log.error("note_cannot_be_deleted: " + request.getId());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
}