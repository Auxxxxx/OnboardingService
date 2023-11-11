package com.example.onboardingservice.web.httpData.user;

import com.example.onboardingservice.model.Client;
import com.example.onboardingservice.model.User;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

import java.util.List;

@Data
@Builder
@Jacksonized
public class ClientListResponse {
    @Schema(name = "clients", description = "List of clients")
    private List<Client> clients;
}

