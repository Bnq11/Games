import { useEffect, useState } from 'react'
import React from 'react';
import  './Letters.css';
// import 'bootstrap/dist/css/bootstrap.css';
import Popup from '../../VSGame/Popup/Popup'



function Letters(){


const [currentLetter, setCurrentLetter] = useState('');
const [count, setCount] = useState(0);
const [responseTime, setResponseTime] = useState(0);
const [correctCount, setCorrectCount] = useState(0);
const [incorrectCount, setIncorrectCount] = useState(0);
const [oneAns , setOneAns] = useState(0)
const [Xcount , setXcount] = useState(0)
const [openPopup, setOpenPopup] = useState(false);
// const [timeSec, setTimeSec] = useState(1000)



useEffect(() => {
    const interval = setInterval(() => {
    // const isTarget = Math.random() < 0.25 ||Math.random() > 0.25 ; // 25% chance that letter is a target
    const letter = String.fromCharCode(Math.floor(Math.random() * 26) + 65); // generate a random letter from A to Z
    setCurrentLetter(letter);
    // setTarget(isTarget);
    if (currentLetter === 'X'){
        setXcount( Xcount +1 );
        setCount(count +1);
    }else {
        setCount(count +1);
    }
    console.log(letter , count);
    setResponseTime(0);
    setOneAns(1);
    if(count === 360){
        setOpenPopup(true)
    }
  }, 2000); // show each letter for 2 seconds
  return () => clearInterval(interval);
}, []);

const handleResponse = (Letter) => {
  const responseDelay = Date.now() - responseTime;
  if (  ( Letter !== 'X') && oneAns === 1) {
    setCorrectCount(correctCount + 1);
    console.log('Correct! Response time:', responseDelay);
  } else {
    if (  Letter === 'X' && oneAns === 1) {
    setIncorrectCount(incorrectCount + 1);
    console.log('Incorrect. Response time:', responseDelay);
    }
  }
  setOneAns(0);
}

// const handleKeyPress = (event) => {
//   if (event.key === 'j') {
//     handleResponse(target);
//   } else if (event.key === 'f') {
//     handleResponse(!target);
//   }
// }

// const handleButtonClick = (isTarget) => {
//   handleResponse(Letter);
// }

return (
  <div className="container5">
    <div className="row mt-5">
      <div className="col-12 text-center">
        <h1 className='letter'>{currentLetter}</h1>
        <button className="btn1 btn-primary mr-2" onClick={() =>  handleResponse(currentLetter)}>هدف</button>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-12 text-center">
        <h3>Results</h3>
        <p>Correct: {correctCount}</p>
        <p>Incorrect: {incorrectCount}</p>
      </div>
    </div>
    <Popup
                title={"انتهى التقييم" }
                // children = {"النقاط : "+ Score}
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >      
            </Popup>
  </div>
);
}
export default Letters