package com.example.onboardingservice.web.httpData.user;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
public class ClientSaveRequest {
    @Schema(name = "name", description = "Name of the client", example = "Bill")
    private String name;
    @Schema(name = "lastName", description = "Last name of the client", example = "Edwards")
    private String lastName;
    @Schema(name = "email", description = "Email of the client", example = "bill_edwards@gmail.com")
    private String email;
    @Schema(name = "sex", description = "Sex of the client", example = "Male")
    private String sex;
    @Schema(name = "mobile", description = "Mobile number of the client", example = "+125552228844")
    private String mobile;
}
