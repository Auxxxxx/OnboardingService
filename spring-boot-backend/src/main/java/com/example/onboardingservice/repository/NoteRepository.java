package com.example.onboardingservice.repository;

import com.example.onboardingservice.model.Note;
import com.example.onboardingservice.model.NoteType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NoteRepository extends JpaRepository<Note, Long> {

    @Query("select n from Note n where n.recipient.email = :email and n.noteType = :noteType")
    List<Note> findByRecipientAndNoteType(String email, NoteType noteType);

}
