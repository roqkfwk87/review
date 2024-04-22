package com.example.board.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.board.entity.BoardEntity;

// -- BoardEntity 생성

@Repository
public interface BoardRepository extends JpaRepository<BoardEntity, Integer> {
    
}