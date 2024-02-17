package com.example.onboardingservice.web.httpData.image;

import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

import java.util.List;
import java.util.Map;

@Data
@Builder
@Jacksonized
public class ImageGetMediaAssetsResponse {
    private List<String> imageUrls;
}
