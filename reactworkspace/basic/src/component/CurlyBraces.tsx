import React from "react";

export default function CurlyBraces() {
    // Curly Braces :
    // - JSX에서 자바스크립트를 작성하는 방법
    // - JSX 안에 {  }로 영역을 지정하고 그 안에 자바스크립트를 작성

    // -- 제목 지정
    const title = "Curly Braces";

    // 1. 요소의 컨텐츠에 자바스크립트 표현식을 쓰고자할 때
    // 2. 주석 처리 - JSX에서는 HTML이 아니라 HTML 주석이 적용 X
    // 3. JSX에서 스타일을 인라인 스타일로 지정할 때
    //    - JSX에서는 인라인 스타일을 문자열로 표현 X, 객체로 표현

    return (
        // -- style={타입} 타입이 객체여야 함 
        // -- { color: "red" } 객체로 스타일을 나타내며 색상은 빨간색으로 표시
        <div style={{ color: "red" }}>
            {/* {10 + 20} 연산식으로 30을 출력 / title 변수의 값 출력 */}
            {10 + 20} {title}
        </div>
    );
}