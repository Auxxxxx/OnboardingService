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
public class AuthenticationService {
    private final UserRepository userRepository;
    private final NoteService noteService;
    private final PasswordEncoder passwordEncoder;

    public void register(String fullName, String email, String password) throws UserAlreadyExistsException {
        if (userRepository.findByEmail(email).isPresent()) {
            throw new UserAlreadyExistsException();
        }
        Client client = Client.builder()
                .fullName(fullName)
                .email(email)
                .password(passwordEncoder.encode(password))
                .build();
        userRepository.save(client);
        noteService.addDefaultNotes(client);
    }

    public User signIn(String email, String password) throws UserNotFoundException, WrongPasswordException {
        User user = userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);
        boolean validPassword = passwordEncoder.matches(password, user.getPassword());
        if (!validPassword) {
            throw new WrongPasswordException();
        }
        return user;
    }
}
