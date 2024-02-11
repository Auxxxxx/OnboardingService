package com.example.onboardingservice.service;

import com.example.onboardingservice.exception.UserAlreadyExistsException;
import com.example.onboardingservice.exception.UserNotFoundException;
import com.example.onboardingservice.exception.WrongPasswordException;
import com.example.onboardingservice.model.Client;
import com.example.onboardingservice.model.Note;
import com.example.onboardingservice.model.NoteType;
import com.example.onboardingservice.model.User;
import com.example.onboardingservice.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@AllArgsConstructor
public class ImageService {
}
