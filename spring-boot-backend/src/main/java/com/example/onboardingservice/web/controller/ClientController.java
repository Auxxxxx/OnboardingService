package com.example.onboardingservice.web.controller;

import com.example.onboardingservice.model.Client;
import com.example.onboardingservice.service.UserService;
import com.example.onboardingservice.web.httpData.user.*;
import com.example.onboardingservice.web.util.RequestData;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.stream.Collectors;

@RestController
@RequestMapping(path = "/client", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
@Slf4j
@Tag(name = "Client", description = "Endpoints for CRUD operations on clients")
public class ClientController {
    private final UserService userService;

    @Operation(summary = "List clients", description = "Lists all clients in the database")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Fetched successfully")
    })
    @GetMapping("/list")
    public ResponseEntity<ClientListResponse> list() {
        log.info("returning_clients_list");
        var users = userService.listClients();
        var response = ClientListResponse.builder()
                .clients(users.stream().map(u -> (Client) u).collect(Collectors.toList()))
                .build();
        return ResponseEntity.ok(response);
    }

    @Operation(summary = "Save form", description = "Accepts client data from the form")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Saved successfully"),
            @ApiResponse(responseCode = "409", description = "Error. Client with such email already exists")
    })
    @PostMapping("/save")
    public ResponseEntity<Void> save(
            @RequestBody(description = "Client data from form", required = true)
            @RequestData ClientSaveRequest request) {
        log.info("saving_user: " + "");

        var user = Client.builder()
                .email(request.getEmail())
                .build();
        userService.save(user);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    /*@PostMapping("/get")
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
    }*/

}