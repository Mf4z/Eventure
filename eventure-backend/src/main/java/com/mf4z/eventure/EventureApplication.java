package com.mf4z.eventure;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.mf4z.eventure")
public class EventureApplication {

    public static void main(String[] args) {
        SpringApplication.run(EventureApplication.class, args);
    }
}
