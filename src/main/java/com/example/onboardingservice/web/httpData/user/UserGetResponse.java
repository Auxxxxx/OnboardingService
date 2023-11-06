package com.example.onboardingservice.web.httpData.user;

import com.example.onboardingservice.model.User;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class UserGetResponse {
    private User user;
}