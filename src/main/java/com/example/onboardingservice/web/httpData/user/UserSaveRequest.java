package com.example.onboardingservice.web.httpData.user;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class UserSaveRequest {
    private String name;
    private String email;
    private String lastName;
    private String sex;
    private String mobile;
}
