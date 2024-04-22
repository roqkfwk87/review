package com.example.board.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// -- 스프링에서 CORS를 설정하는 방법
// -- CORS는 웹 애플리케이션에서 다른 도메인의 리소스에 접근할 수 있는 권한을 부여하는 메커니즘

// 스프링 Bean으로 등록 
// -- Bean을 등록하기 위한 어노테이션
// -- 스프링 컨테이너에서 Bean을 관리할 수 있게 함
@Configuration

// -- 스프링에서 제공하는 CORS 구성을 커스터마이징하기 위해서 WebMvcConfigurer 구현
// -- implements: 클래스가 특정 인터페이스를 구현하기 위해 사용
public class CorsConfig implements WebMvcConfigurer {
    
    @Override
    // -- addCorsMappings() 메서드 내부에서는 다양한 CORS 설정을 지정
    // -- CorsRegistry 객체를 통해 CORS 구성을 추가
    public void addCorsMappings(CorsRegistry registry) {
        registry
            // -- 모든 경로에 대해 CORS를 허용하도록 설정, "/**"는 모든 경로를 나타냄
            .addMapping("/**")
            // -- 모든 HTTP 메서드를 허용하도록 설정, "*"는 모든 HTTP 메서드를 나타내
            .allowedMethods("*")
            // -- 모든 오리진(도메인)을 허용하도록 설정, "*"는 모든 오리진을 나타냄
            // -- 오리진(도메인): 인터넷에서 식별 가능한 고유한 주소
            .allowedOrigins("*");
    }
}
