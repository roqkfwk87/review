package com.estate.back.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// Estate 데이터베이스의 board 테이블과 매핑되는 Entity 클래스
@Entity(name="board")
@Table(name="board")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BoardEntity {
    @Id
    // JPA(Java Persistence API)에서 엔티티의 기본 키(primary key) 값을 자동으로 생성하기 위해 사용
    // 게시판에서 [1, 2, 3 ...] 처럼 증가하는 것을 표현하기 위해 사용  
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer receptionNumber;
    private Boolean status;
    private String title;
    private String contents;
    private String writerId;
    private String writerDatetime;
    private Integer viewCount;
    private String comment;
    
}