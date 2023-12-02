package com.example.onboardingservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@ToString(onlyExplicitlyIncluded = true)
@EqualsAndHashCode(callSuper = true)
public class Client extends User {
    @Schema(example = "Bill Edwards")
    private String fullName;
    @Schema(example = "male")
    private String gender;
    @Schema(example = "+125552228844")
    private String mobile;

    {
        setRole(Role.CLIENT);
    }

    @JsonIgnore
    @Builder.Default
    @OneToMany(mappedBy = "recipient", fetch=FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Note> notes = new ArrayList<>();

}
