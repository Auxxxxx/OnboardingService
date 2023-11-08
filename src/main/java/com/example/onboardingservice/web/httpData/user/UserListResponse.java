package com.example.onboardingservice.web.httpData.user;

import com.example.onboardingservice.model.User;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

import java.util.List;

@Data
@Builder
@Jacksonized
public class UserListResponse {
    private List<User> users;
}

