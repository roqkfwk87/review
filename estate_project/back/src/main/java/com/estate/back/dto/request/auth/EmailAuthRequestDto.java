package com.estate.back.dto.request.auth;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// 이메일 인증 Request Body DTO

@Getter
@Setter
@NoArgsConstructor
public class EmailAuthRequestDto {
    // 해당 필드가 null이 아닌지를 검증
    @NotNull
    // 해당 필드의 값이 지정된 정규 표현식 패턴과 일치하는지를 검증
    @Pattern(regexp="^[a-zA-Z0-9]*@([-.]?[a-zA-Z0-9])*\\.[a-zA-Z]{2,4}$")
    // 이메일 주소
    private String userEmail;
}