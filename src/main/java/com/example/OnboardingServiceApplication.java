package com.example.onboardingservice;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;

import java.net.InetAddress;
import java.net.UnknownHostException;


@SpringBootApplication
@Slf4j
public class OnboardingServiceApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        try {
            log.info(InetAddress.getLocalHost().toString());
        } catch (UnknownHostException e) {
            log.info("unknown_host");
        }
        SpringApplication.run(OnboardingServiceApplication.class, args);
    }

    @Component
    public class EndpointsListener implements ApplicationListener<ContextRefreshedEvent> {

        @Override
        public void onApplicationEvent(ContextRefreshedEvent event) {
            ApplicationContext applicationContext = event.getApplicationContext();
            applicationContext.getBean(RequestMappingHandlerMapping.class).getHandlerMethods()
                    .forEach((a, b) -> log.info(b.toString()));
        }
    }

}
