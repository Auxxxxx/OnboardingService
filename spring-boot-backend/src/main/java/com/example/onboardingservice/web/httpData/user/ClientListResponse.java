package com.example.onboardingservice.web.httpData.user;

import com.example.onboardingservice.model.Client;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

import java.util.List;

@Data
@Builder
@Jacksonized
public class ClientListResponse {
    private List<Client> clients;
}

