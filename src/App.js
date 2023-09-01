
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Detail from './pages/Detail';
import { useEffect, useState } from 'react';
import QuizList from './components/Quizlist';

function App() {

  const [userName, setUserName] = useState("");
  //기본값쓸려면 ""안에쓰면 이름에 입력이 되어있다(원래 넣으면x)
  const [quizlist, setQuizList] = useState(QuizList)
  const quiz = [...QuizList];
  const [selected,setSelected] = useState(3)

  const[quizCnt, setQuizCnt] = useState(QuizList.length);
  const[typeTxt, setTypeTxt] = useState("전체");

  const ChangeEvent = (data) =>{
    const classValue = data.target.className;
    const dataValue = data.target.value;
    switch(true){
      //includes("값") >  해당 문자열이 있는지 체크
      case classValue.includes("name") :
        // console.log("이름값이 바뀜") //이름입력시 이름값이 바뀜이라고 출력
        setUserName(dataValue)
      break;
      case classValue.includes("random") :
        // console.log("랜덤값이 바뀜")
        // console.log(dataValue) //콘솔창에 0,1나옴
        (dataValue === "1" ? setQuizList([...quizlist].sort(()=>{
          return Math.random() - 0.5}).slice(0, selected)
          )
           : setQuizList([...QuizList]).slice(0, selected))
        //각각 콘솔창 랜덤,기본으로 출력된다
        //0 ~ 1사이의 값을 반환 > 0.5의 평균값을 얻게 되어 -0.5~0.5값으로 랜덤 출력
      break;
      case classValue.includes("cnt") :
        // console.log("갯수값이 바뀜")
        setSelected(dataValue)
      break;
      case classValue.includes("type") :
        // console.log("문제값이 바뀜")
        // console.log(dataValue) //html클릭하면 html이라고 출력
        (dataValue === "전체"
        ?
        setQuizList([...QuizList].slice(0,selected))
        :
        setQuizList([...QuizList].filter((e)=>{
          return e.type === dataValue
          }).slice(0,selected))
        ) // 문제유형별로 선택하면 갯수도 맞게 변경
        setTypeTxt(dataValue)
      break;
      default :
      console.log("데이터가 없습니다")
    }

    // console.log(classValue)
    // console.log(dataValue)
  }
  // console.log(quizlist)



  useEffect(()=>{
    setQuizList([...QuizList].slice(0,selected)); //세미콜론 넣어야지 오류가 안나올거임
    setQuizCnt([...QuizList].filter((e)=>{
      return typeTxt === "전체" ? true : e.type === typeTxt;
    }).length)
    console.log(quizlist)
  },[typeTxt,selected]) // 배열입력시 로딩되고 딱 한번만 실행
  //재랜더링될때마다 어떤것을 실행할때 로딩이 되고나서 실행되는 함수
  //새로고침시 마다 계속 실행


  return (

    <Routes>
      <Route path="/" element={<Main ChangeEvent={ChangeEvent} userName={userName} quiz={quiz} quizlist={quizlist} selected={selected} quizCnt={quizCnt} />}/>
      <Route path="/quiz" element={ <Detail quizlist={quizlist} userName={userName}/>}/>
    </Routes>

    // <div className="App">
      
    // </div>
    
  );
}

export default App;
