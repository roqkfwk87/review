package com.example.board.dto.response;

// -- 다중 상속과 가독성을 위해 interface를 사용 
public interface ResponseMessage {

    // spring boot 연습 참고
    String SUCCESS = "Success.";
    String VALIDATION_FAIL = "Validation failed.";
    String DUPLICATE_EMAIL = "Duplicate email.";
    String DUPLICATE_NICKNAME = "Duplicate nickname.";
    String DUPLICATE_TEL_NUMBER = "Duplicate telephone number.";
    String NOT_EXIST_USER = "This user does not exist.";
    String NOT_EXIST_BOARD = "This board does not exist.";
    String SIGN_IN_FAIL = "Login information mismatch.";
    String AUTHORIZATION_FAIL = "Authorization Failed.";
    String NO_PERMISSION = "Do not have permission.";
    String DATABASE_ERROR = "Database error.";
}