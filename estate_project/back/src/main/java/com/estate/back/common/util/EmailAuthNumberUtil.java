package com.estate.back.common.util;

import java.util.Random;

// 이메일 인증번호 유틸리티

public class EmailAuthNumberUtil {

    // 4자리 인증번호 생성
    // - 0~9의 4자리 임의의 문자열
    public static String createNumber() {

        String authNumber = "";
        Random random = new Random();

        for (int index = 0; index < 4; index++) {
            authNumber += random.nextInt(10);
        }

        return authNumber;
    }

    // A~Z의 4자리 임의의 문자열
    public static String createCode() {

        // char : 문자열을 생성하기 위한 방법
        // 문자열을 String으로 변환하기 위해 사용
        char[] authChar = new char[4];
        Random random = new Random();

        for (int index = 0; index < authChar.length; index++) {
            // 숫자를 문자로 강제 형변환
            authChar[index] = (char) (random.nextInt(26) + 65); 
        }

        // 배열을 문자열로 변환
        return new String(authChar); 
    }

    // A~Z, 0~9의 4자리 임의의 문자열
    public static String createCodeNumber() {

        char[] authChar = new char[4];
        Random random = new Random();

        for (int index = 0; index < authChar.length; index++) {
            boolean flag = random.nextBoolean();

            // flag : 무작위로 true 또는 false 값을 가지는 논리형 변수
            if (flag) {
                // 0부터 9까지의 무작위 숫자(bound:10)에 48을 더하여 ASCII 코드값을 얻음
                // 이를 문자로 강제 형변환하여 숫자를 얻음
                authChar[index] = (char) (random.nextInt(10) + 48);
            } else {
                // A부터 Z까지의 무작위 알파벳(bound:26)에 65를 더하여 ASCII 코드값을 얻음
                // 이를 문자로 강제 형변환하여 알파벳을 얻음
                authChar[index] = (char) (random.nextInt(26) + 65);
            }
        }

        return new String(authChar);
    }
}