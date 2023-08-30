const QuizList = [
    {
        id:1,
        question : "HTML의 의미를 보기에서 고르세요",
        answer: "Hyper Text Markup Language",
        view:{
            number1:"Hyper Text Markup Language",
            number2:"Hyperlinks and Text Markup Language",
            number3:"Home Tool Markup Language",
            number4:"Hyperlinks Tool Markup Language"
        },
        hint:"웹 페이지를 만들기 위한 표준 마크업 언어입니다",
        type:"html"
    },
    {
        id:2,
        question : "inline 요소를 고르세요",
        answer: "<span>",
        view:{
            number1:"<div>",
            number2:"<p>",
            number3:"<span>",
            number4:"<header>"
        },
        hint:"인라인 요소는 필요한 만큼만 너비를 차지합니다.",
        type:"html"
    },
    {
        id:3,
        question : "target속성 중 새창으로 여는 속성값은 무엇일까요?",
        answer: "_blank",
        view:{
            number1:"_self",
            number2:"_blank",
            number3:"_parent",
            number4:"_top"
        },
        hint:"문서를 새 창이나 탭에서 엽니다.",
        type:"html"
    },
    {
        id:4,
        question : "내용(content)과 테두리(border) 사이의 간격은 무엇일까요?",
        answer: "padding",
        view:{
            number1:"margin",
            number2:"border-margin",
            number3:"content-margin",
            number4:"padding"
        },
        hint:"테두리 내부의 요소 콘텐츠 주위에 공간을 만드는 데 사용합니다",
        type:"css"
    },
    {
        id:5,
        question : "position속성 중 해당 HTML 요소의 기본 위치를 기준으로 위치를 설정하는 방식은 무엇일까요?",
        answer: "position: relative",
        view:{
            number1:"position: absolute",
            number2:"position: fixed",
            number3:"position: relative",
            number4:"position: sticky"
        },
        hint:"상대적 위치 지정 방식",
        type:"css"
    },
    {
        id:6,
        question : "테두리(border)의 모서리를 둥글게 만드는 속성은 무엇일까요?",
        answer: "border-radius",
        view:{
            number1:"border-style",
            number2:"border-radius",
            number3:"border-image",
            number4:"border-color"
        },
        hint:" 테두리를 둥글게 만드는 속성입니다",
        type:"css"
    },
    {
        id:7,
        question : "javascript 변수를 선언하는 방법이 아닌것은 무엇일까요?",
        answer: "list",
        view:{
            number1:"let",
            number2:"const",
            number3:"var",
            number4:"list"
        },
        hint:"다른의미를 가진 답을 선택하세요",
        type:"javascript"
    },
    {
        id:8,
        question : "자바스크립트 함수 구문으로 알맞은것은 무엇일까요?",
        answer: "function",
        view:{
            number1:"document.write",
            number2:"var",
            number3:"return",
            number4:"function"
        },
        hint:"함수는 무언가가 이를 호출할 때 실행합니다",
        type:"javascript"
    },
    {
        id:9,
        question : "조건문 형태가 아닌것은 무엇일까요?",
        answer: "for 문",
        view:{
            number1:"for 문",
            number2:"if 문",
            number3:"if / else if / else 문",
            number4:"switch 문"
        },
        hint:"조건문은 프로그램 내에서 주어진 표현식의 결과에 따라 별도의 명령을 수행하도록 제어하는 실행문입니다",
        type:"javascript"
    }
]
export default QuizList;