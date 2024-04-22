import React from "react";

// Properties (속성)
// - 부모 컴포넌트(호출부)에서 자식 컴포넌트로 데이터를 전달하기 위한 *객체*
// - 부모 컴포넌트에서는 HTML과 동일한 방식 (속성명=데이터)로 전달
// - 자식 컴포넌트에서는 JS의 매개변수 방식으로 받음
// - 전달할 수 있는 데이터는 JS로 표현할 수 있는 모든 형태
// - 컴포넌트가 리렌더링되는 기준
// - Properties는 부모 요소에서 자식 요소로 데이터 전송 O / 자식 요소에서 부모 요소로 데이터 전송 X

// -- 부모요소
interface Props {
    title: string;
    content: string;
    // -- ?붙이면 반드시 표기하지 않아도 가능 
    nickname?: string;
}

// -- 자식 컴퍼넌트 
function Child({ title, content, nickname = '비공개' }: Props) {

    // -- props 객체에서 title 속성을 추출하여 title 변수에 할당
    // const title = props.title;
    // -- props 객체에서 content 속성을 추출하여 content 변수에 할당
    // const content = props.content;

    // -- props 객체로부터 title과 content 속성을 추출
    // -- 위의 2개를 하나로 합쳐서 표현
    // const { title, content } = props;

    return (
        <div>
            {/* 부모 컴포넌트에서 전달받은 요소들이 포함되어 있는 상태 */}
            <h1>{title}</h1>
            <h4>{nickname}</h4>
            <p>{content}</p>
        </div>
    )
}

export default function Properties() {
    return (
        <>
            {/* title, content는 반드시 표기해야 함 */}
            <Child title='제목1' content='내용1' nickname='로제' />
            {/* nickname을 따로 표시해두지 않으면 비공개로 처리 */}
            <Child title='국제인구 이동' content='보도자료' />
            <Child title='외국인 지역별 통계' content='제가 못찾는 것일까요?' />
        </>
    );
}