package com.djamware.react;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;

@SpringBootApplication
public class ReactApplication extends SpringBootServletInitializer {

	@Override
	 protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
			 return application.sources(ReactApplication.class);
	 }

	public static void main(String[] args) {
		SpringApplication.run(ReactApplication.class, args);
	}
}
