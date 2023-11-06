package com.example.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.time.DayOfWeek;
import java.util.SortedMap;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString(onlyExplicitlyIncluded = true)
@Table(name = "data")
public class FormData {
    @Id
    @GeneratedValue
    @JsonIgnore
    @ToString.Include
    private Long id;

}
