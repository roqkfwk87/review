import React, { useEffect, useRef, useState } from "react";

// Custom Hook :
// - 리액트의 훅 함수는 반드시 함수형 컴포넌트의 코드 블럭에서만 호출 가능
// - 함수명을 use로 시작하게 작성하여 커스텀 훅 함수를 만들 수 있음
// - 커스텀 훅 함수에는 다른 훅 함수를 포함할 수 있음

function usePagination(totalList: string[]) {

    // -- 현재 페이지를 나타내는 상태 변수
    // -- <number>(1)를 이용하여 타입이 number이며 (1)를 이용하여 페이지 번호는 1부터 시작함
    // -- setPage 함수를 사용하여 페이지를 변경할 수 있음
    const [page, setPage] = useState<number>(1);
    // -- 현재 섹션을 나타내는 상태 변수 
    // -- 섹션은 게시물에서 보면 <1, 2, 3, 4, 5, ...>했을 때 1줄에 나타내는 것을 1섹션이라고 함
    const [section, setSection] = useState<number>(1);
    // -- 전체 목록을 담는 배열
    // -- ex) 게시물 [1, 2, 3, 4, 5]라 치면 1 ~ 5까지의 게시물을 담고 있음
    // -- 페이지를 변경할 때마다 다른 코드에서 지정한 페이지에 해당하는 만큼의 항목을 보여줌
    // -- ex) 10개의 게시물 5개 지정이면 1페이지의 5개씩 보여줌
    // -- BoardList : 게시물 목록 
    const [boardList, setBoardList] = useState<string[]>([]);
    // -- 현재 페이지에 표시될 목록을 담는 배열 
    // -- 이 배열은 현재 페이지에 표시할 항목들의 부분집합을 나타냄
    // -- ex) 전체 게시물이 10개이고, 페이지당 5개씩 보여주도록 지정해준 경우, 현재 페이지에는 5개의 게시물이 포함될 수 있음
    // -- viewList : 보기 목록
    const [viewList, setViewList] = useState<string[]>([]);
    // -- 페이지네이션 바에 표시될 페이지 번호 목록을 담는 배열
    // -- ex) < 1 2 3 4 5 > 페이지 목록 => 사용자가 페이지를 변경, 특정 페이지 번호를 클릭할 때 페이지 번호 목록이 업데이트
    const [viewPageList, setViewPageList] = useState<number[]>([]);

    // -- 전체 페이지 수 = 초기값 1
    const totalPageCount = useRef<number>(1);
    // -- 전체 섹션 수 = 초기값 1
    const totalSectionCount = useRef<number>(1);

    // -- 한 페이지당 보여줄 항목(게시물)의 수 = 5개
    const COUNT_PER_PAGE = 5;
    // -- 한 페이지당 보여줄 섹션의 수 = 10개
    const COUNT_PER_SECTION = 10;

    // -- 다음 섹션 
    const setNextSection = () => {
        // -- 현재 섹션이 전체 섹션 수와 같으면 종료 => 마지막 섹션
        if (section === totalSectionCount.current) return;
        // -- 그렇지 않으면, section 상태 변수를 1씩 증가 => 1섹션 2섹션 ... 
        setSection(section + 1);

        // -- 현재 섹션에 해당하는 첫 번째 페이지를 계산
        // -- section * COUNT_PER_SECTION + 1을 계산하여 현재 섹션의 시작 페이지를 결정
        // -- section은 현재 섹션, COUNT_PER_SECTION은 한 섹션당 보여줄 페이지의 수
        // -- section * COUNT_PER_SECTION은 현재 섹션에서의 마지막 페이지를 구함
        // -- +1을 하는 이유는 다음 섹션으로 넘어가기 위함 
         const page = section * COUNT_PER_SECTION + 1;
        // -- 계산된 페이지 번호를 setPage 함수를 사용하여 설정
        setPage(page);
    };

    // -- 이전 섹션 
    const setPreviousSection = () => {

        // -- 현재 섹션이 첫 번째 섹션이라면 함수를 종료
        // -- 이유 : 첫 번째 섹션 이전에는 더 이전 섹션이 없기 때문
        if (section === 1) return;
        // -- 그렇지 않은 경우, section 상태 변수를 감소
        // -- 현재 섹션에서 이전 섹션으로 이동을 위해 -1을 해줌 
        setSection(section - 1);
        
        // -- 현재 섹션의 이전 섹션에 해당하는 첫 번째 페이지를 계산
        // -- (section - 1) * COUNT_PER_SECTION을 계산하여 현재 섹션의 이전 섹션의 시작 페이지를 결정
        const page = (section - 1) * COUNT_PER_SECTION;
        // -- 계산된 페이지 번호를 setPage 함수를 사용하여 설정
        setPage(page);
    };

    // -- boardList에서 현재 페이지에 해당하는 일부 데이터를 추출하여 viewList에 설정하는 역할
    const changeViewList = (boardList: string[]) => {

        // -- viewList라는 새로운 배열을 생성
        const viewList = [];

        // -- 현재 페이지의 첫 번째 항목의 인덱스를 계산하여 currentPageStart에 저장
        // -- ex) 첫 번째 페이지의 경우 COUNT_PER_PAGE * (1 - 1)로 계산
        const currentPageStart = COUNT_PER_PAGE * (page - 1);
        // -- 현재 페이지의 마지막 항목의 인덱스를 계산하여 currentPageEnd에 저장
        // -- ex) 첫 번째 페이지의 경우 COUNT_PER_PAGE * 1 - 1로 계산 
        const currentPageEnd = COUNT_PER_PAGE * page - 1;

        // -- ex) 현재 페이지가 1일 때
        // -- currentPageStart = 10 * (1 - 1) = 0
        // -- currentPageEnd = 10 * 1 - 1 = 9
        // -- 첫 번째 페이지의 첫 번째 항목은 인덱스 0, 마지막 항목은 인덱스 9
        
        // -- boardList의 항목을 반복하면서 현재 페이지에 해당하는 항목을 viewList에 추가합니다. 
        // -- 추가할 때 현재 페이지 범위를 벗어나면 반복을 종료합니다.
        for (let index = currentPageStart; index <= currentPageEnd; index++) {
            if (index >= boardList.length) break;
            viewList.push(boardList[index]);
        }
        // 최종적으로 setViewList(viewList)를 호출하여 viewList를 업데이트합니다.
        setViewList(viewList);
    };

    const changeViewPageList = () => {
        const viewPageList = [];
        const currentSectionStart =
            COUNT_PER_SECTION * section - (COUNT_PER_SECTION - 1);
        const currentSectionEnd = COUNT_PER_SECTION * section;

        for (
            let page = currentSectionStart;
            page <= currentSectionEnd;
            page++
        ) {
            if (page > totalPageCount.current) break;
            viewPageList.push(page);
        }
        setViewPageList(viewPageList);
    };

    useEffect(() => {
        const boardList = totalList;
        setBoardList(boardList);
        totalPageCount.current =
            Math.floor((boardList.length - 1) / COUNT_PER_PAGE) + 1;
        totalSectionCount.current =
            Math.floor(
                (boardList.length - 1) / (COUNT_PER_PAGE * COUNT_PER_SECTION)
            ) + 1;

        changeViewList(boardList);
        changeViewPageList();
    }, []);

    useEffect(() => {
        if (!boardList.length) return;
        changeViewList(boardList);
    }, [page]);

    useEffect(() => {
        changeViewPageList();
    }, [section]);

    return {
        page, setPage, viewList, viewPageList, setPreviousSection, setNextSection
    }
}

export default function CustomHook() {

    const { page, setPage, viewList, viewPageList, setPreviousSection, setNextSection } = usePagination(BOARD_LIST);

    return (
        <div>
            {viewList.map((item, index) => (
                <h3 key={index}>{item}</h3>
            ))}
            <div>
                <span
                    style={{ display: "inline-block", margin: "4px" }}
                    onClick={setPreviousSection}
                >
                    이전
                </span>
                {viewPageList.map((item, index) => (
                    <span
                        key={index}
                        style={{
                            display: "inline-block",
                            margin: "4px",
                            fontWeight: item === page ? 900 : 400,
                        }}
                        onClick={() => setPage(item)}
                    >
                        {item}
                    </span>
                ))}
                <span
                    style={{ display: "inline-block", margin: "4px" }}
                    onClick={setNextSection}
                >
                    이후
                </span>
            </div>
        </div>
    );
}

const BOARD_LIST = [
    "게시물1",
    "게시물2",
    "게시물3",
    "게시물4",
    "게시물5",
    "게시물6",
    "게시물7",
    "게시물8",
    "게시물9",
    "게시물10",
    "게시물11",
    "게시물12",
    "게시물13",
    "게시물14",
    "게시물15",
    "게시물16",
    "게시물17",
    "게시물18",
    "게시물19",
    "게시물20",
    "게시물21",
    "게시물22",
    "게시물23",
    "게시물24",
    "게시물25",
    "게시물26",
    "게시물27",
    "게시물28",
    "게시물29",
    "게시물30",
    "게시물31",
    "게시물32",
    "게시물33",
    "게시물34",
    "게시물35",
    "게시물36",
    "게시물37",
    "게시물38",
    "게시물39",
    "게시물40",
    "게시물41",
    "게시물42",
    "게시물43",
    "게시물44",
    "게시물45",
    "게시물46",
    "게시물47",
    "게시물1",
    "게시물2",
    "게시물3",
    "게시물4",
    "게시물5",
    "게시물6",
    "게시물7",
    "게시물8",
    "게시물9",
    "게시물10",
    "게시물11",
    "게시물12",
    "게시물13",
    "게시물14",
    "게시물15",
    "게시물16",
    "게시물17",
    "게시물18",
    "게시물19",
    "게시물20",
    "게시물21",
    "게시물22",
    "게시물23",
    "게시물24",
    "게시물25",
    "게시물26",
    "게시물27",
    "게시물28",
    "게시물29",
    "게시물30",
    "게시물31",
    "게시물32",
    "게시물33",
    "게시물34",
    "게시물35",
    "게시물36",
    "게시물37",
    "게시물38",
    "게시물39",
    "게시물40",
    "게시물41",
    "게시물42",
    "게시물43",
    "게시물44",
    "게시물45",
    "게시물46",
    "게시물47",
    "게시물1",
    "게시물2",
    "게시물3",
    "게시물4",
    "게시물5",
    "게시물6",
    "게시물7",
    "게시물8",
    "게시물9",
    "게시물10",
    "게시물11",
    "게시물12",
    "게시물13",
    "게시물14",
    "게시물15",
    "게시물16",
    "게시물17",
    "게시물18",
    "게시물19",
    "게시물20",
    "게시물21",
    "게시물22",
    "게시물23",
    "게시물24",
    "게시물25",
    "게시물26",
    "게시물27",
    "게시물28",
    "게시물29",
    "게시물30",
    "게시물31",
    "게시물32",
    "게시물33",
    "게시물34",
    "게시물35",
    "게시물36",
    "게시물37",
    "게시물38",
    "게시물39",
    "게시물40",
    "게시물41",
    "게시물42",
    "게시물43",
    "게시물44",
    "게시물45",
    "게시물46",
    "게시물47",
];