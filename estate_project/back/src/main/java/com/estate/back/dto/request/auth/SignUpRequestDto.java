package com.estate.back.dto.request.auth;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// 회원가입 Request Body DTO

@Getter
@Setter
@NoArgsConstructor
public class SignUpRequestDto {
    @NotBlank
    // 아이디
    private String userId;
    @NotNull
    @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*[0-9]).{8,13}$")
    // 비밀번호
    private String userPassword;
    @NotNull
    @Pattern(regexp="^[a-zA-Z0-9]*@([-.]?[a-zA-Z0-9])*\\.[a-zA-Z]{2,4}$")
    // 이메일
    private String userEmail;
    @NotBlank
    // 인증번호
    private String authNumber;
}