
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Detail from './pages/Detail';
import { useState } from 'react';
import QuizList from './components/Quizlist';

function App() {

  const QuizLength = QuizList.length;
  console.log(QuizList)

  const [userName, setUserName] = useState("");
  const [quizlist, setQuizList] = useState(QuizList)
  const ChangeName = (data) =>{
    setUserName(data)
  }
  // console.log(quizlist)

  return (
    <>
    <Routes>
      <Route path="/" element={<Main ChangeName={ChangeName} userName={userName} QuizLength={QuizList.length} quizlist={quizlist} />}/>
      <Route path="/quiz" element={ <Detail quizlist={quizlist} userName={userName}/>}/>
    </Routes>
    </>
    // <div className="App">
      
    // </div>
    
  );
}

export default App;
