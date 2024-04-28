package com.estate.back.dto.request.auth;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// 이메일 인증 확인 Request Body DTO

@Getter
@Setter
// 해당 클래스의 기본 생성자를 생성
@NoArgsConstructor
public class EmailAuthCheckRequestDto {
    // 해당 필드가 null이거나 공백 문자로만 이루어져 있지 않음을 검증
    @NotBlank
    // 이메일 주소
    private String userEmail;
    @NotBlank
    // 이메일 인증 번호 
    private String authNumber;
}