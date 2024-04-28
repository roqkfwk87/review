package com.estate.back.config;

import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.config.annotation.web.configurers.HttpBasicConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.estate.back.filter.JwtAuthenticationFilter;

import lombok.RequiredArgsConstructor;

// -> httpSecurity에서 설정 
// Spring Web Security 설정
// - Basic 인증 미사용
// - CSRF 정책 미사용 
// - Session 생성 정책 미사용
// - CORS 정책 (모든 출처 - 모든 메서드 - 모든 패턴 허용)
// - JwtAuthenticationFilter 추가(UsernamePasswordAuthenticationFilter 이전에 추가)

@Configurable
@Configuration
// webScecurity에서 답변 가능하게 
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    
    @Bean
    // configure을 사용하기 위해서 @Configurable을 등록 
    // SecurityFilterChain: HTTP 보안 필터 체인을 구성하는 인터페이스
    protected SecurityFilterChain configure(HttpSecurity httpSecurity) throws Exception {

        // HttpSecurity : 웹 보안 구성을 설정
        httpSecurity
            .httpBasic(HttpBasicConfigurer::disable)
            .csrf(CsrfConfigurer::disable)
            .sessionManagement(sessionManagement -> sessionManagement
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .cors(cors -> cors
                .configurationSource(corsConfigurationSource())
            )
            .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return httpSecurity.build();
    }

    // Cors 정책 설정
    @Bean
    protected CorsConfigurationSource corsConfigurationSource() {
        
        // CorsConfiguration 객체를 생성하여 CORS 설정을 구성
        CorsConfiguration configuration = new CorsConfiguration();
        // addAllowedOrigin("*")은 모든 출처에서의 요청을 허용 
        configuration.addAllowedOrigin("*");
        // HTTP 헤더(Header) : 클라이언트와 서버간의 요청과 응답 
        // addAllowedHeader("*")는 모든 헤더를 허용 
        configuration.addAllowedHeader("*");
        // addAllowedMethod("*")는 모든 HTTP 메서드를 허용
        configuration.addAllowedMethod("*");

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }

}