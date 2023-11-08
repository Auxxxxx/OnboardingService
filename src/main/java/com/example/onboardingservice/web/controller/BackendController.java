package com.example.onboardingservice.web.controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
@Slf4j
public class BackendController {

    @PostMapping("/process")
    public String processFormData(@RequestBody FormData formData) {
        // Process the data or perform any backend tasks
        // ...

        // Return a response back to the frontend
        return String.format(
                "{\"status\": \"success\", \"message\": \"%s : %s\"}",
                formData.getName(), formData.getEmail());
    }
}