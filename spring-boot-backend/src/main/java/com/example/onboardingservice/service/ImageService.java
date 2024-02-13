package com.example.onboardingservice.service;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.*;
import com.example.onboardingservice.exception.UserAlreadyExistsException;
import com.example.onboardingservice.exception.UserNotFoundException;
import com.example.onboardingservice.exception.WrongPasswordException;
import com.example.onboardingservice.model.Client;
import com.example.onboardingservice.model.Note;
import com.example.onboardingservice.model.NoteType;
import com.example.onboardingservice.model.User;
import com.example.onboardingservice.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ImageService {
    @Value("${aws.baseUrl}")
    private String baseUrl;
    private final AmazonS3 s3;

    public void uploadMediaAssets(Map<String, String> imagesBase64, String clientEmail) {
        saveImages(imagesBase64, clientEmail, "media-assets");
    }

    public void uploadPaidAdvertisingReports(Map<String, String> imagesBase64, String clientEmail) {
        saveImages(imagesBase64, clientEmail, "paid-advertising-reports");
    }

    private void saveImages(Map<String, String> imagesBase64, String clientEmail, String folder) {
        for (Map.Entry<String, String> imageBase64 : imagesBase64.entrySet()) {
            String filename = imageBase64.getKey();
            String image = imageBase64.getValue();
            byte[] bI = Base64.decodeBase64((image.substring(image.indexOf(",")+1)).getBytes());
            InputStream fis = new ByteArrayInputStream(bI);

            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentLength(bI.length);
            metadata.setContentType("image/png");
            metadata.setCacheControl("public, max-age=31536000");
            String path = String.join("/", folder, clientEmail, filename);
            s3.putObject("glasflair-media-assets", path, fis, metadata);
            s3.setObjectAcl("glasflair-media-assets", path, CannedAccessControlList.PublicRead);
        }
    }

    public List<String> getMediaAssets(String clientEmail) {
        return getImages(clientEmail, "media-assets/");

    }

    public List<String> getPaidAdvertisingReports(String clientEmail) {
        return getImages(clientEmail, "paid-advertising-reports/");
    }

    private List<String> getImages(String clientEmail, String folder) {
        String prefix = folder + clientEmail;
        ObjectListing listing = s3.listObjects("glasflair-media-assets", prefix);
        List<S3ObjectSummary> summaries = listing.getObjectSummaries();

        while (listing.isTruncated()) {
            listing = s3.listNextBatchOfObjects(listing);
            summaries.addAll(listing.getObjectSummaries());
        }
        return summaries.stream()
                .map(summary -> baseUrl + summary.getKey())
                .collect(Collectors.toList());
    }
}