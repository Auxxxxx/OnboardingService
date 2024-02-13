package com.example.onboardingservice.web.httpData.image;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

import java.util.List;

@Data
@Builder
@Jacksonized
public class ImageGetPaidAdvertisingReportsResponse {
    private List<String> imageUrls;
}
