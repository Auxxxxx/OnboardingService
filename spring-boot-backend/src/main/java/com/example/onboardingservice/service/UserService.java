package com.example.onboardingservice.service;

import com.example.onboardingservice.exception.UserIsNotClientException;
import com.example.onboardingservice.exception.UserNotFoundException;
import com.example.onboardingservice.model.Client;
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

    public List<User> listByRole(Role role) {
        return userRepository.findByRole(role);
    }

    public void save(User user) {
        userRepository.save(user);
    }

    public void updateClient(Client client) throws UserNotFoundException, UserIsNotClientException {
        User user = findByEmail(client.getEmail());
        if (!(user instanceof Client existing)) {
            throw new UserIsNotClientException();
        }
        existing.setGender(client.getGender());
        existing.setMobile(client.getMobile());
        existing.setFullName(client.getFullName());
        save(existing);
    }

    public User findByEmail(String email) throws UserNotFoundException {
        return userRepository.findByEmail(email).orElseThrow(UserNotFoundException::new);
    }

    @Transactional
    public List<User> deleteByEmail(String email) {
        userRepository.deleteByEmail(email);
        return listByRole(Role.CLIENT);
    }
}
