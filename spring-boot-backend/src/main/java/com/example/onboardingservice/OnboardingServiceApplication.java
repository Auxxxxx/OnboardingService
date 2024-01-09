package com.example.onboardingservice;

import com.example.onboardingservice.model.Client;
import com.example.onboardingservice.model.Manager;
import com.example.onboardingservice.service.AuthenticationService;
import com.example.onboardingservice.service.UserService;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Bean;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;


@SpringBootApplication
@Slf4j
public class OnboardingServiceApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(OnboardingServiceApplication.class, args);
    }

    @Bean
    public ApplicationListener<ContextRefreshedEvent> applicationListener() {
        return event -> {
            ApplicationContext applicationContext = event.getApplicationContext();
            applicationContext.getBean(RequestMappingHandlerMapping.class).getHandlerMethods()
                    .forEach((a, b) -> log.info(b.toString()));
        };
    }

    public @Bean OpenAPI noteAPI() {
        return new OpenAPI()
                .info(
                        new Info()
                                .title("OnboardingService API")
                                .description("A CRUD API for the Onboarding Service")
                );
    }

    @Bean
    public CommandLineRunner commandLineRunner(UserService userService,
                                               AuthenticationService authenticationService) {
        return args -> {
            userService.save(Manager.builder()
                    .email("asdf@gjaksdj.ru")
                    .password("pass")
                    .status("cool")
                    .build());
            //authenticationService.signIn("bill_edwards@gmail.com", "cookie123");
            authenticationService.register("Bill Edwards", "bill_edwards@gmail.com", "cookie123");
            authenticationService.signIn("bill_edwards@gmail.com", "cookie123");
            userService.updateClient(Client.builder()
                    .email("bill_edwards@gmail.com")
                    .fullName("Bob edwards")
                    .build());
        };
    }

}
