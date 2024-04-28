package com.estate.back.dto.request.auth;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// 로그인 Request Body DTO

@Getter
@Setter
@NoArgsConstructor
public class SignInRequestDto {
    @NotBlank
    // 아이디
    private String userId;
    @NotBlank
    // 비밀번호
    private String userPassword;
}