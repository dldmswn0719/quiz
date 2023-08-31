import React from 'react'
import { useNavigate } from 'react-router-dom';

function Main({userName,ChangeEvent,quizlist,quiz,selected}) {
  
  let navigate = useNavigate();

  const type = quiz.map(item => item.type);
  // console.log(type) //html 3개,css 3개, javascript 3개 출력
  const typeSelect = [...new Set(type)];//중복을 제거하고 새로운 배열을 만드는 코드
  console.log(typeSelect) //html,css,javascript 딱 3개만 출력

  const nameChk = () =>{

    (userName === ""
    ? function(){
      alert("이름을 입력해주세요")
      document.querySelector("input").focus();
    }() //username 이 비어있다면 
    :
    navigate("/quiz")
    )// 비어있지 않다면 detail로 넘어감
  }


  return (
    <>
    {/* {userName} */}
    {/* userName 입력시 이름입력하는 그대로 창위에 출력된다 */}
      <div className='w-full flex items-center h-full'>
        <div className='mx-auto basis-11/12 lg:basis-10/12'>
          <div className='bg-white rounded-lg p-5 pb-0'>
            <div className='text-center flex flex-wrap justify-between'>
              <input defaultValue={userName} className='name border pl-4 py-2 rounded-md shadow-md outline-none basis-full sm:basis-8/12 ' type="text" onChange={ChangeEvent} placeholder='이름을 입력해주세요' />
              <button className='text-sm sm:text-base btn-primary bg-blue-500 hover:blue-700 focus:ring-blue-400 sm:py-0 basis-full  sm:basis-3/12 mt-5 sm:mt-0' onClick={nameChk}>시작하기</button>
              <h3 className="my-5 basis-full text-center">{userName !== "" && <><span className='text-indigo-500 font-bold'>{userName}님</span><span>문제 유형은 기본값으로 설정 되어있으며, 총 {quiz.length}문제 중 1문제를 선택하셨습니다.</span></>}</h3> 
              {/* userName이 있으면 나오고, 없으면 나오지않는다 */}
            </div>
          </div>
          <div className="w-full bg-white rounded-lg p-5 mt-5 flex flex-wrap justify-between items-center">
            <div className="flex justify-around items-center xl:basis-4/12 basis-full">
              <button className='btn-primary text-sm sm:text-base bg-green-800 hover:bg-green-700 focus:ring-green-400 basis-5/12'>랜덤설정</button>
              <select className='random border rounded basis-6/12 text-center py-1.5'  onChange={ChangeEvent}>
                <option value="0">기본</option>
                <option value="1">랜덤</option>
              </select>
            </div>
            <div className="flex justify-around items-center xl:basis-4/12 basis-full">
              <button className='btn-primary text-sm sm:text-base bg-green-800 hover:bg-green-700 focus:ring-green-400 basis-5/12 my-5'>갯수 설정</button>
              <select className='cnt border rounded basis-6/12 text-center py-1.5'  onChange={ChangeEvent} defaultValue={selected}>
                {
                  Array(quizlist.length).fill().map((e,i)=>{
                    return <option value={i+1} key={i}>{i+1}문제</option>
                  })
                }
              </select>
            </div>
            <div className="flex justify-around items-center xl:basis-4/12 basis-full">
              <button className='btn-primary text-sm sm:text-base bg-green-800 hover:bg-green-700 focus:ring-green-400 basis-5/12'>문제 유형</button>
              <select className='type border rounded basis-6/12 text-center py-1.5'  onChange={ChangeEvent}>
                <option value="전체">전체 {quiz.length}(문제)</option>
                  {
                    typeSelect.map(el =>{
                      return <option value={el} key={el}>{el} ({quiz.filter(e=> el===e.type).length})</option> //유형별로 각각 몇문제 있는지 확인이 된다
                    }) 
                  }
                  {/* 문제유형 고를수 있다 ,html css javascript */}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main