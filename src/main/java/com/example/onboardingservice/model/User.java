package com.example.onboardingservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.io.Serializable;
import java.time.DayOfWeek;
import java.util.SortedMap;

@Entity
@Inheritance
@Data
@NoArgsConstructor
@SuperBuilder
@ToString(onlyExplicitlyIncluded = true)
@Table(name = "table_user")
public abstract class User implements Serializable {
    @Id
    @GeneratedValue
    @JsonIgnore
    @ToString.Include
    private Long id;
    private String email;
    private String password;
    private Role role;
}
