package com.example.onboardingservice.model;

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
    private String fullName;
    private String gender;
    private String mobile;

    {
        setRole(Role.CLIENT);
    }
}
