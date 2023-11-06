package com.example.onboardingservice.web.controller;

import com.example.onboardingservice.exception.UserNotFoundException;
import com.example.onboardingservice.model.User;
import com.example.onboardingservice.service.UserService;
import com.example.onboardingservice.web.httpData.user.*;
import com.example.onboardingservice.web.util.RequestData;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/user", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
@Slf4j
public class UserController {
    private final UserService userService;

    @PostMapping("/list")
    public ResponseEntity<UserListResponse> list() {
        log.info("returning_user_list");
        var users = userService.listAll();
        var response = UserListResponse.builder()
                .users(users)
                .build();
        return ResponseEntity.ok(response);
    }

    @PostMapping("/save")
    public ResponseEntity<Void> save(
            @RequestData UserSaveRequest request) {
        log.info("saving_user: " + "");

        var user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .build();
        userService.save(user);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PostMapping("/get")
    public ResponseEntity<UserGetResponse> get(
            @RequestData UserGetRequest request) {
        log.info("fetching_user: " + request.getEmail());
        try {
            var user = userService.getByEmail(request.getEmail());
            var response = UserGetResponse.builder()
                    .user(user)
                    .build();
            return ResponseEntity.ok(response);
        } catch (UserNotFoundException e) {
            log.error("user_not_found: " + request.getEmail());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        }
    }

    @PostMapping("/delete")
    public ResponseEntity<Void> delete(
            @RequestData UserDeleteRequest request) {
        log.info("deleting_user: " + request.getId());
        userService.delete(request.getId());
        return ResponseEntity.status(HttpStatus.OK).build();
    }

}