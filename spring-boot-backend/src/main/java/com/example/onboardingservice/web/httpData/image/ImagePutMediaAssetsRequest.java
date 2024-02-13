package com.example.onboardingservice.web.httpData.image;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

import java.util.Map;

@Data
@Builder
@Jacksonized
public class ImagePutMediaAssetsRequest {
    private Map<String, String> imagesBase64;
    private String clientEmail;
}
