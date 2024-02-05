package com.example.onboardingservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString(onlyExplicitlyIncluded = true)
@Table(name = "note")
public class Note implements Serializable {
    @Id
    @GeneratedValue
    @ToString.Include
    private Long id;
    private NoteType noteType;
    @Schema(example = "Meeting in November")
    private String header;
    @Schema(example = "yyyy-MM-dd")
    private LocalDate date;

    @Schema(example = "[\"note line 1\",\"note line 2\"]")
    @ElementCollection(targetClass = String.class, fetch = FetchType.EAGER)
    @CollectionTable(name = "note_content", joinColumns = @JoinColumn(name = "id"))
    @Column(name = "note_content", nullable = false)
    private List<String> content;

    @JsonIgnore
    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name = "client_id", referencedColumnName = "id")
    private Client recipient;


}
