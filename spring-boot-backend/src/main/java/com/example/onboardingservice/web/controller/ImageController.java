package com.example.onboardingservice.web.controller;

import com.amazonaws.auth.*;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.ListObjectsV2Result;
import com.example.onboardingservice.service.ImageService;
import com.example.onboardingservice.web.httpData.image.ImageGetMediaAssetsResponse;
import com.example.onboardingservice.web.httpData.image.ImageGetPaidAdvertisingReportsResponse;
import com.example.onboardingservice.web.httpData.image.ImagePutMediaAssetsRequest;
import com.example.onboardingservice.web.httpData.image.ImagePutPaidAdvertisingReportsRequest;
import com.example.onboardingservice.web.util.RequestData;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
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
@RequestMapping(path = "/image", produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
@Slf4j
@Tag(name = "Image", description = "Endpoints for loading and downloading images")
public class ImageController {
    private final ImageService imageService;

    @Operation(summary = "Save media assets", description = "Load media assets images into the storage.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Saved successfully"),
            @ApiResponse(responseCode = "400", description = "Bad Request. Arguments are not base64 encoded images")
    })
    @PutMapping("/media-assets")
    public ResponseEntity<Void> putMediaAssets(
            @RequestBody(description = """
                    Map of images encoded as Base64 strings <filename, imageBase64>
                    And email of the client who uploads the images
                    """, required = true)
            @RequestData ImagePutMediaAssetsRequest request) {
        if (request.getImagesBase64() == null ||
                request.getImagesBase64().isEmpty() ||
                request.getClientEmail() == null ||
                request.getClientEmail().isBlank()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        log.info("saving_media_assets: " + request.getClientEmail());
        imageService.uploadMediaAssets(
                request.getImagesBase64(),
                request.getClientEmail());
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @Operation(summary = "Get media assets", description = "Get media assets for this client.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Fetched successfully"),
            @ApiResponse(responseCode = "400", description = "Bad Request. No client specified")
    })
    @GetMapping("/media-assets/{clientEmail}")
    public ResponseEntity<ImageGetMediaAssetsResponse> getMediaAssets(
            @Parameter(description = """
                    And email of the client who had uploaded the images
                    """, required = true)
            @PathVariable("clientEmail") String clientEmail) {
        if (clientEmail == null || clientEmail.isBlank()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        log.info("fetching_media_assets: " + clientEmail);
        var imageUrls = imageService.getMediaAssets(clientEmail);
        log.info(String.join(",", imageUrls));
        var response = ImageGetMediaAssetsResponse.builder()
                .imageUrls(imageUrls)
                .build();
        return ResponseEntity.ok(response);
    }

    @Operation(summary = "Save paid advertising reports", description = "Load paid advertising repots images into the storage.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Saved successfully"),
            @ApiResponse(responseCode = "400", description = "Bad Request. Arguments are not base64 encoded images")
    })
    @PutMapping("/paid-advertising-reports")
    public ResponseEntity<Void> putPaidAdvertisingReports(
            @RequestBody(description = """
                    Map of images encoded as Base64 strings <filename, imageBase64>
                    And email of the client who will receive the images
                    """, required = true)
            @RequestData ImagePutPaidAdvertisingReportsRequest request) {
        if (request.getImagesBase64() == null ||
                request.getImagesBase64().isEmpty() ||
                request.getClientEmail() == null ||
                request.getClientEmail().isBlank()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        log.info("saving_paid_advertising_reports: " + request.getClientEmail());
        imageService.uploadPaidAdvertisingReports(
                request.getImagesBase64(),
                request.getClientEmail());
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @Operation(summary = "Get paid advertising reports", description = "Get paid advertising reports for this client.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Fetched successfully"),
            @ApiResponse(responseCode = "400", description = "Bad Request. No client specified")
    })
    @GetMapping("/paid-advertising-reports/{clientEmail}")
    public ResponseEntity<ImageGetPaidAdvertisingReportsResponse> getPaidAdvertisingReports(
            @Parameter(description = """
                    And email of the client who should see the images
                    """, required = true)
            @PathVariable("clientEmail") String clientEmail) {
        if (clientEmail == null || clientEmail.isBlank()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        log.info("fetching_paid_advertising_reports: " + clientEmail);
        var imageUrls = imageService.getPaidAdvertisingReports(clientEmail);
        log.info(String.join(",", imageUrls));
        var response = ImageGetPaidAdvertisingReportsResponse.builder()
                .imageUrls(imageUrls)
                .build();
        return ResponseEntity.ok(response);
    }

}