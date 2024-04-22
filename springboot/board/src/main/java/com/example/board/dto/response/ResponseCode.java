package com.example.board.dto.response;

// -- interface :
// -- 코드의 가독성과 유지 보수성을 향상

// -- class는 다중 상속이 불가하여 interface를 이용하는 것을 권장 
public interface ResponseCode {

    // spring boot 연습 참고
    String SUCCESS = "SU";
    String VALIDATION_FAIL = "VF";
    String DUPLICATE_EMAIL = "DE";
    String DUPLICATE_NICKNAME = "DN";
    String DUPLICATE_TEL_NUMBER = "DT";
    String NOT_EXIST_USER = "NU";
    String NOT_EXIST_BOARD = "NB";
    String SIGN_IN_FAIL = "SF";
    String AUTHORIZATION_FAIL = "AF";
    String NO_PERMISSION = "NP";
    String DATABASE_ERROR = "DBE";
    
}
