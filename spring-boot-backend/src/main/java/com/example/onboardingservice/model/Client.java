package com.example.onboardingservice.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Entity;
import lombok.*;
import lombok.experimental.SuperBuilder;

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
}
