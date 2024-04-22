package com.example.board.service;

import org.springframework.http.ResponseEntity;

import com.example.board.dto.request.auth.SignUpRequestDto;

public class AuthService {
    ResponseEntity<ResponseDto> signUp(SignUpRequestDto dto);
}
