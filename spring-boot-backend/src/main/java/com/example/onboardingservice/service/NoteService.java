package com.example.onboardingservice.service;

import com.example.onboardingservice.exception.NoteCannotBeDeletedExcption;
import com.example.onboardingservice.exception.NoteNotFoundException;
import com.example.onboardingservice.exception.UserNotFoundException;
import com.example.onboardingservice.model.*;
import com.example.onboardingservice.repository.NoteRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.weaver.ast.Not;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@AllArgsConstructor
public class NoteService {
    private final NoteRepository noteRepository;

    public List<Note> listMeetingNotes(String email) {
        return noteRepository.findByRecipientAndNoteType(email, NoteType.MEETING_NOTES);
    }

    public Note getUsefulInfo(String email) throws NoteNotFoundException {
        List<Note> found = noteRepository.findByRecipientAndNoteType(email, NoteType.USEFUL_INFO);
        return found.stream().findAny().orElseThrow(NoteNotFoundException::new);
    }

    public Note getContactDetails(String email) throws NoteNotFoundException {
        List<Note> found = noteRepository.findByRecipientAndNoteType(email, NoteType.CONTACT_DETAILS);
        return found.stream().findAny().orElseThrow(NoteNotFoundException::new);
    }

    public void save(Note note) {
        switch (note.getNoteType()) {
            case MEETING_NOTES -> {
                noteRepository.save(note);
            }
            case USEFUL_INFO -> {
                noteRepository.findByRecipientAndNoteType(
                                note.getRecipient().getEmail(),
                                NoteType.USEFUL_INFO)
                        .stream()
                        .findAny()
                        .ifPresent(existingNote -> note.setId(existingNote.getId()));
                noteRepository.save(note);
            }
            case CONTACT_DETAILS -> {
                noteRepository.findByRecipientAndNoteType(
                                note.getRecipient().getEmail(),
                                NoteType.CONTACT_DETAILS)
                        .stream()
                        .findAny()
                        .ifPresent(existingNote -> note.setId(existingNote.getId()));
                noteRepository.save(note);
            }
            default -> {
                log.error(String.format("Saving note type %s is not handled", note.getNoteType()));
            }
        }
    }

    public void addDefaultNotes(Client client) {
        NoteType[] types = NoteType.values();
        for (NoteType type : types) {
            Note note = buildDefaultNote(type, client);
            save(note);
        }
    }

    public Note buildDefaultNote(NoteType type, Client client) {
        return Note.builder()
                .header(type.getDefaultHeader())
                .content(type.getDefaultContent())
                .noteType(type)
                .recipient(client)
                .date(LocalDate.now())
                .build();
    }

    @Transactional
    public List<Note> deleteMeetingNoteById(Long id) throws
            NoteNotFoundException, NoteCannotBeDeletedExcption {
        Note note = noteRepository.findById(id).orElseThrow(NoteNotFoundException::new);
        if (note.getNoteType() == NoteType.MEETING_NOTES) {
            noteRepository.deleteById(id);
            return listMeetingNotes(note.getRecipient().getEmail());
        } else {
            throw new NoteCannotBeDeletedExcption();
        }
    }
}
