/* import React, {useState, useEffect} from 'react'; */
import React from 'react';
import CounterContainer from './containers/CounterContainer';
import Box from './components/Box';
import './App.css';
import Link from 'next/link'
import About from './About'

const App = () => {
  return (
    <div>
      <Box />
      <CounterContainer />
      <Link href="/about">
          <a>소개</a>
      </Link>
    </div>
  )
  
};
/*
function App() {  
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);
  const [listItem, setListItem] = useState([1,2,3,4,5]);

  const setCountHandle = () =>{
    setCount(count +1);
    setListItem(listItem.concat(count))
  }
  const setCountHandle2 = () =>{
    setCount2(count2 +2);
  }
  const listHandle = listItem.map((itemValue,index) =>(
      <li key={index}>{itemValue}</li>
  ));
   
  useEffect(()=>{
    console.log("렌더링 완료1")
    console.log(count)
  },[count])
  useEffect(()=>{
    console.log("렌더링 완료2")
    console.log(count2)
  },[count2])
  return (
    <div>
      <span>{count}</span>
      <button type="button" onClick={setCountHandle}>1증가</button>
      <span>{count2}</span>
      <button type="button" onClick={setCountHandle2}>2증가</button>
      <ul>{listHandle}</ul>

      <ul className="faqList">
        <li>
          <div className="tit" >제목</div>
          <div className="cont">내용</div>
        </li>
        <li>
          <div>제목</div>
          <div>내용</div>
        </li>
      </ul>
    </div>
  );
}  
*/


export default App;
