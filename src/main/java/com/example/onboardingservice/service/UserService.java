package com.example.onboardingservice.service;

import com.example.onboardingservice.exception.UserNotFoundException;
import com.example.onboardingservice.model.Role;
import com.example.onboardingservice.model.User;
import com.example.onboardingservice.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public List<User> listAll() {
        return userRepository.findAll();
    }

    public List<User> listClients() {
        return userRepository.findByRole(Role.CLIENT);
    }

    public void save(User user) {
        userRepository.save(user);
    }

    public User getByEmail(String email) throws UserNotFoundException {
        return userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);
    }

    public User get(Long id) throws UserNotFoundException {
        return userRepository.findById(id).orElseThrow(UserNotFoundException::new);
    }

    @Transactional
    public void delete(Long id) {
        userRepository.deleteById(id);
    }
}
