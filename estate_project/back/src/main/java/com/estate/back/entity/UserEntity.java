package com.estate.back.entity;

import com.estate.back.dto.request.auth.SignUpRequestDto;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// Estate 데이터베이스의 User 테이블과 매핑되는 Entity 클래스
// 클래스명과 테이블 명이 달라서 직접 나열 함 (name="user")
@Entity(name="user")
@Table(name="user")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserEntity {
    // 엔티티의 기본 키(primary key)를 나타내는 필드에 지정
    @Id
    // 여기서는 userId 필드가 기본 키
    private String userId;
    private String userPassword;
    private String userEmail;
    // 사용자 권한
    private String userRole;
    // 사용자의 회원가입 경로
    private String joinPath;

    //! 이해 다시 하기 
    public UserEntity (SignUpRequestDto dto) {
        this.userId = dto.getUserId();
        this.userPassword = dto.getUserPassword();
        this.userEmail = dto.getUserEmail();
        // 새로 생성되는 사용자 엔티티의 기본 역할을 "ROLE_USER"로 설정
        // 사용자가 기본적으로 일반 사용자 역할을 가지게 됨
        this.userRole = "ROLE_USER";
        // 새로 생성되는 사용자 엔티티의 회원가입 경로를 "HOME"으로 설정
        // 이는 사용자가 직접 회원가입한 것을 나타냄
        this.joinPath = "HOME";
    }

}