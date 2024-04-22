package com.example.board.controller;

import org.apache.catalina.connector.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

// JSON 형태의 Response body를 반환하기 위한 Controller임을 명시하는 어노테이션
@RestController
// HTTP 요청과 컨트롤러 클래스 혹은 메서드를 매핑하기 위해 사용되는 어노테이션 
@RequestMapping("/api/v1/auth")
// 필수 멤버변수들을 매개변수로 받는 생성자를 작성해주는 어노테이션 
@RequiredArgsConstructor
public class AuthController {
    
    private final AuthService authservice {

        @PostMapping("/sign-up")
        public ResponseEntity<ResponseDto> signUp(

            @RequestBody @Valide SignUpRequestDto RequestBody
        ) {

            ResponseEntity<ResponseDto> response = authservice.signUp(RequestBody);
            return response;
        }
    }
}
