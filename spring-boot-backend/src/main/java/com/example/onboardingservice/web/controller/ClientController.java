package com.example.onboardingservice.web.controller;

import com.example.onboardingservice.exception.UserIsNotClientException;
import com.example.onboardingservice.exception.UserNotFoundException;
import com.example.onboardingservice.model.Client;
import com.example.onboardingservice.model.Role;
import com.example.onboardingservice.service.UserService;
import com.example.onboardingservice.web.httpData.user.ClientDeleteRequest;
import com.example.onboardingservice.web.httpData.user.ClientDeleteResponse;
import com.example.onboardingservice.web.httpData.user.ClientListResponse;
import com.example.onboardingservice.web.httpData.user.ClientUpdateRequest;
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
import org.springframework.web.bind.annotation.*;

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
        var users = userService.listByRole(Role.CLIENT);
        var response = ClientListResponse.builder()
                .clients(users.stream().map(u -> (Client) u).collect(Collectors.toList()))
                .build();
        return ResponseEntity.ok(response);
    }

    @Operation(summary = "Save form", description = "Accepts client data from the form")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Saved successfully"),
            @ApiResponse(responseCode = "400", description = "Error. User with such email is not a client"),
            @ApiResponse(responseCode = "404", description = "Error. Client with such email not found")
    })
    @PatchMapping
    public ResponseEntity<Void> update(
            @RequestBody(description = "Client data from form", required = true)
            @RequestData ClientUpdateRequest request) {
        log.info("updating_client: " + request.getEmail());
        try {
            var client = Client.builder()
                    .email(request.getEmail())
                    .fullName(request.getFullName())
                    .mobile(request.getMobile())
                    .gender(request.getGender())
                    .build();
            userService.updateClient(client);
            return ResponseEntity.status(HttpStatus.OK).build();
        } catch (UserNotFoundException e) {
            log.error("user_not_found" + request.getEmail());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (UserIsNotClientException e) {
            log.error("user_is_not_client: " + request.getEmail());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @Operation(summary = "Delete client", description = "Deletes client by email")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Deleted successfully")
    })
    @DeleteMapping
    public ResponseEntity<ClientDeleteResponse> delete(
            @RequestBody(description = "Email of the client to delete", required = true)
            @RequestData ClientDeleteRequest request) {
        log.info("deleting_client: " + request.getEmail());
        var clients = userService.deleteByEmail(request.getEmail());
        var response = ClientDeleteResponse.builder()
                .clients(clients)
                .build();
        return ResponseEntity.ok(response);
    }

}