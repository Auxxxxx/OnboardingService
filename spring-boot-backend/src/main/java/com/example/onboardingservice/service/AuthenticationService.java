package com.example.onboardingservice.service;

import com.example.onboardingservice.exception.UserAlreadyExistsException;
import com.example.onboardingservice.exception.UserNotFoundException;
import com.example.onboardingservice.exception.WrongPasswordException;
import com.example.onboardingservice.model.Client;
import com.example.onboardingservice.model.User;
import com.example.onboardingservice.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public void register(String fullName, String email, String password) throws UserAlreadyExistsException {
        if (userRepository.findByEmail(email).isPresent()) {
            throw new UserAlreadyExistsException();
        }
        User user = Client.builder()
                .fullName(fullName)
                .email(email)
                .password(passwordEncoder.encode(password))
                .build();
        userRepository.save(user);
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
