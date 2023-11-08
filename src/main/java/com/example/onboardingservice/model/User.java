package com.example.onboardingservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.time.DayOfWeek;
import java.util.SortedMap;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString(onlyExplicitlyIncluded = true)
@Table(name = "_user")
public class User implements Serializable {
    @Id
    @GeneratedValue
    @JsonIgnore
    @ToString.Include
    private Long id;
    private String name;
    private String email;
    private String lastName;
    private String sex;
    private String mobile;
}
