package com.example.onboardingservice.web.controller;

import com.amazonaws.auth.*;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.Bucket;
import com.amazonaws.services.s3.model.ListObjectsV2Result;
import com.example.onboardingservice.exception.UserAlreadyExistsException;
import com.example.onboardingservice.exception.UserNotFoundException;
import com.example.onboardingservice.exception.WrongPasswordException;
import com.example.onboardingservice.service.AuthenticationService;
import com.example.onboardingservice.web.httpData.authentication.AuthenticationRegisterRequest;
import com.example.onboardingservice.web.httpData.authentication.AuthenticationSignInRequest;
import com.example.onboardingservice.web.httpData.authentication.AuthenticationSignInResponse;
import com.example.onboardingservice.web.util.RequestData;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.elasticsearch.ElasticsearchProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestClient;
import yandex.cloud.api.logging.v1.SinkOuterClass;

import javax.print.attribute.standard.Media;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping(path = "/image", produces = {MediaType.IMAGE_PNG_VALUE, MediaType.IMAGE_JPEG_VALUE})
@AllArgsConstructor
@Slf4j
@Tag(name = "Image", description = "Endpoints for loading and downloading images")
public class ImageController {

    @GetMapping("/download")
    public ResponseEntity<Void> list() {
        AWSCredentials credentials = new BasicAWSCredentials(
                "YCAJEGCZOC8L9268c-8LFMk2l",
                "YCNt_BMuw6MWBXLvRO0eVvtd2aWD6BnZ0IMjUuIf"
        );
        AmazonS3 s3 = AmazonS3ClientBuilder.standard()
                .withCredentials(new AWSStaticCredentialsProvider(credentials))
                .withEndpointConfiguration(
                        new AmazonS3ClientBuilder.EndpointConfiguration(
                                "storage.yandexcloud.net","ru-central1"
                        )
                )
                .build();

        ListObjectsV2Result listObjectsV2Result = s3.listObjectsV2("glasflair-media-assets");
        log.info(listObjectsV2Result.getBucketName());
        listObjectsV2Result.getObjectSummaries()
                .forEach(s3ObjectSummary -> log.info(s3ObjectSummary.getKey()));
        return ResponseEntity.status(HttpStatus.OK).build();
    }

}