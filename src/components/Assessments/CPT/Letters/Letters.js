import './Letters.css';

import React, {
  useEffect,
  useState,
} from 'react';

import {
  toast,
  ToastContainer,
} from 'react-toastify';

import Background from '../../../Background/Background';
// import 'bootstrap/dist/css/bootstrap.css';
import Popup from '../../VSGame/Popup/Popup';

function Letters(){

// const notify = () => toast.success('اجابة صحيحة', {
// position: "bottom-left",
// autoClose: 2000,
// hideProgressBar: true,
// closeOnClick: true,
// pauseOnHover: true,
// draggable: true,
// progress: undefined,
// theme: "colored",
// });
// const error = ()=> toast.error('اجابة خاطئة', {
// position: "bottom-right",
// autoClose: 2000,
// hideProgressBar: true,
// closeOnClick: true,
// pauseOnHover: true,
// draggable: true,
// progress: undefined,
// theme: "colored",
// });

const [currentLetter, setCurrentLetter] = useState('');
const [count, setCount] = useState(0);
const [responseTime, setResponseTime] = useState(0);
const [correctCount, setCorrectCount] = useState(0);
const [incorrectCount, setIncorrectCount] = useState(0);
const [oneAns , setOneAns] = useState(0)
const [openPopup, setOpenPopup] = useState(false);
const [TotalResponseTime , setTotalResponseTime]= useState(0);



const [startTimer , setStartTimer] = useState(true);
const [Time , setTime]= useState(0);

useEffect(() => {
  if(startTimer){
    const timerId = setInterval(() => {
      setTime(t => t + 1)
    }, 1000);
   return () => clearInterval(timerId)
  }
}, [ startTimer ] )

useEffect(() => {
    const interval = setInterval(() => {
    const letter = String.fromCharCode(Math.floor(Math.random() * 26) + 65); // generate a random letter from A to Z
    setCurrentLetter(letter);
    console.log(letter);
    setOneAns(1);
  }, 2500); // show each letter for 2.5 seconds
  return () => clearInterval(interval);
}, []);

const handleResponse = (Letter) => {
  if (Time > 840){
     setOpenPopup(true); /////////////// Finish Game
     CalculateScore ();
  } 
  
  const responseDelay = (Time%2.5) ;
  setTotalResponseTime(TotalResponseTime+responseDelay)
  if (  ( Letter !== 'X') && oneAns === 1) {
    setCorrectCount(correctCount + 1);
    // notify()
    console.log('Correct! Response time:', responseDelay);
  } else {
    if (  Letter === 'X' && oneAns === 1) {
    setIncorrectCount(incorrectCount + 1);
    // error()
    console.log('Incorrect. Response time:', responseDelay);
    }
  }
  setOneAns(0);
}
function CalculateScore (){
  var numOfLetters = Math.floor(Time / 2.5) ;
  var Target = correctCount ;
  var notTarget = incorrectCount ;
  var numOfnotTarget = numOfLetters - (Target+notTarget) ;
  var averageResponseTime = TotalResponseTime/(Target+notTarget)+" ثوانٍ ";
  var hour = Math.floor((Time / 60 )/ 60);
  var min = Math.floor((Time / 60)- (hour*60)) ;
  var sec = Math.floor(Time - (min*60)) ;
  var ConsumedTime = hour + ':' + min + ':' + sec ;
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
  <>  
    <ToastContainer position="bottom-left"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      />        
  <div className="container5">
    <div className="row mt-5">
      <div className="col-12 text-center">
        <h1 className='letter'>{currentLetter}</h1>
        <button className="btn1 btn-primary mr-2" onClick={() =>  handleResponse(currentLetter)}>هدف</button>
      </div>
    </div>
    <div className='time-card shadow'>
      <h1 className='timer'>الوقت: {(Time/ 60).toFixed(2) }  د</h1>
    </div>
    <Background/>
    <Popup
      title={"انتهى التقييم" }
      // children = {"النقاط : "+ Score}
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
    >      
    </Popup>
  </div>
  </>
);
}
export default Letters