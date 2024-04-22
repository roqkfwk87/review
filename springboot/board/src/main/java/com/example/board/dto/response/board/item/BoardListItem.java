package com.example.board.dto.response.board.item;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class BoardListItem {

    // spring boot 연습 참고 (Response - BoardListItem)
    private Integer boardNumber;
    private String title;
    private String content;
    private String boardTitleImage;
    private Integer favoriteCount;
    private Integer viewCount;
    private String writeDatetime;
    private String writeNickname;
    private String writeProfileImage;
}
