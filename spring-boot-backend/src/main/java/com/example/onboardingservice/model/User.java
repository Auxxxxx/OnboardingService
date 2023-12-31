package com.example.onboardingservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

import java.io.Serializable;

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
    @Schema(example = "bill_edwards@gmail.com")
    private String email;
    @JsonIgnore
    private String password;
    private Role role;
}
