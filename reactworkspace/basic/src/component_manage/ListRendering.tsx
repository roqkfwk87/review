import React from "react";

// 리스트 렌더링 :
// - JSX 내부에서 반복적으로 렌더링하는 요소에 대해 반복 처리
// - JSX 안에서는 for 혹은 while과 같은 반복문을 사용할 수 없음
// - 리스트의 각종 메서드를 활용

interface Human {
    name: string;
    age: number;
    job: string;
}

function ListItem ({ name, age, job }: Human) {

    return (
        <div>
            <h1>이름 : {name}</h1>
            <h4>나이 : {age}</h4>
            <h4>직업 : {job}</h4>
        </div>
    )
}

export default function ListRendering() {

    const humans: Human[] = [
        { name: '홍길동', age: 20, job: '학생' },
        { name: '김철수', age: 30, job: '개발자' },
        { name: '이영희', age: 27, job: '경찰' },
        { name: '김민수', age: 12, job: '학생' },
    ];

    // -- filter() 메서드:
    // -- 주어진 함수의 테스트를 통과하는 모든 요소를 모아서 새로운 배열을 반환
    // -- 주로 조건에 맞는 요소만을 필터링할 때 사용
    // -- students는 humans중에서 직업이 학생인 요소만 가지고 있음 
    const students = humans.filter(item => item.job === '학생');

    // -- forEach() 메서드:
    // -- 배열의 각 요소에 대해 주어진 함수를 실행
    // -- 반환값이 없으며, 주로 배열의 요소에 대한 작업을 수행할 때 사용
    //! -- Error
    // humans.forEach((item, index) => {
    //     return <ListItem name={item.name} age={item.age} job={item.job} />
    // }); => undefined

    // -- map() 메서드:
    // -- 배열의 각 요소에 대해 주어진 함수를 호출한 결과를 모아서 새로운 배열을 반환
    // -- 주로 리스트를 JSX로 변환할 때 사용
    //! -- Error: JSX를 반환X 
    // humans.map((item, index) => {
    //     return <ListItem name={item.name} age={item.age} job={item.job} />
    // }); => [ListItem, ListItem, ListItem, ListItem]

    // - forEach X -> map O 
    // - JSX에 리스트 고급 함수를 사용할 때 결과를 반환하는 함수를 사용해야함
    // - 특정 조건에 해당하는 요소만 출력하고 싶으면 filter 메서드를 응용해서 사용

    // - 완전 단순한 반복(횟수 반복)을 사용할 땐 반복하고자하는 횟수의 길이를 가지는 배열을 생성해서 해당 배열로 반복작업
    // -- 반복아이템을 3개 출력 
    // -- count는 [1, 2, 3]
    const count = new Array(3).fill(0);

    return (
        <>
            {/* 배열을 JSX에 반환하면 배열의 각 요소를 하나씩 꺼내와서 렌더링 */}
            {/* {['요소1', '요소2', '요소3']} */}

            {/* human 출력 */}
            {humans.map((item, index) => {
                // return <ListItem name={item.name} age={item.age} job={item.job} />
                return <ListItem key={index} {...item} />
            })}

            {/* human 출력 */}
            {humans.map(item => <ListItem key={item.name} {...item} />)}
            {/* 직업이 학생인 human 출력 */}
            {students.map(item => <ListItem key={item.name} {...item} />)}
            {/* 반복 아이템 3개 출력 */}
            {count.map(item => <h1 key={item}>반복 아이템</h1>)}
        </>
    );
}