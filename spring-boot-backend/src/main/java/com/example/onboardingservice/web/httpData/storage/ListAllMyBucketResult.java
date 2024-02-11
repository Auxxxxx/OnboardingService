package com.example.onboardingservice.web.httpData.storage;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

import java.util.List;

@Data
@Builder
@Jacksonized
public class ListAllMyBucketResult {
    private List<Bucket> Buckets;
}

@Data
@Builder
@Jacksonized
class Bucket {
    private String Name;
    private String CreationDate;
}
