// import { Link } from "react-router-dom"
import './Balloon.css';
import 'react-toastify/dist/ReactToastify.css';

import React, { useState } from 'react';

import {
  toast,
  ToastContainer,
} from 'react-toastify';

import Popup from '../../VSGame/Popup/Popup';
import Pop from '../assets/Pop.mp3';

function Balloons(){
    const [items] = useState([
        { id: 1, img: '/img/blue.png', stat: "" },
        { id: 2, img: '/img/orange.png', stat: "" },
        { id: 3, img: '/img/yallow.png', stat: "" },
    ])
    const [Animation] = useState([
        { id: 1, img: '/img/b2.png', stat: "" },
        { id: 2, img: '/img/o2.png', stat: "" },
        { id: 3, img: '/img/y2.png', stat: "" },
    ])
    const [animation] = useState([
        { id: 1, img: '/img/b3.png', stat: "" },
        { id: 2, img: '/img/o3.png', stat: "" },
        { id: 3, img: '/img/y3.png', stat: "" },
    ])
    const [BlueArray, setBlueArray] = useState([
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
        21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
        41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,
        61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,
        81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,
        101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,
        121,123,124,125,126,127,128
    ])
    const [YellowArray, setYellowArray] = useState([
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
        21,22,23,24,25,26,27,28,29,30,31,32
    ])
    const [OrangeArray, setOrangeArray] = useState([
        1,2,3,4,5,6,7,8
    ])

    const [openPopup, setOpenPopup] = useState(false);
    const [index , setIndex ] = useState(Math.floor(Math.floor((Math.random()*3))));
    const [Count , setCount] =  useState(1);
    const [num, setnum] = useState(1);
    const [Score , setScore] = useState(0);
    const [Total, setTotal] = useState(0);
    const [pumpO, setpumpO] = useState(false);
    const [pumpT, setpumpT] = useState(false);
    const [original, setoriginal] = useState(true);
    const [random,setrandom] = useState(Math.floor(Math.floor((Math.random()*8))));
    const [temp, setTemp] = useState(random);
    const [attempts, setAttempts] = useState (0);
    const [Risk, setRisk]=useState(0) 
    const [RiskRatio, setRiskRatio]=useState(0)
    const [loss, setLoss]=useState(0)
    // Risk Taking Ratio will be used in the last step
    const [LastBalloon, setLastBalloon]=useState(0)

    const notify = () => toast(`مبروك لقد ربحت  ${Score}`);

    function handleClick(){
      if(index === 0){
        
        for (let index = 0; index < 128; index++) {
            setrandom(Math.floor(Math.floor((Math.random()*128))));
            console.log(random);
            if ( temp !== random && random > attempts ) 
            {
            setTemp(random); 
            break;
            }
          }

        for (let index = 0; index < BlueArray.length; index++) {
           if ( index === random ) 
           {BlueArray[index]= 0;}
         }
         setBlueArray([...BlueArray]);
      
        if (BlueArray[attempts] === 0){
            setRisk(Risk+1)
            new Audio(Pop).play()
            setoriginal(false);
            setpumpO(true)
            setTimeout(() => {
                setpumpO(false)
                setpumpT(true)   
            }, 200);
            setTimeout(() => {
                setpumpT(false)
                setIndex(Math.floor(Math.floor((Math.random()*3))))
                setoriginal(true)   
            }, 400);
            setnum(num+1)
            if (num === 15)
            {
            setRiskRatio( (Risk / 15)*100 );
            setOpenPopup(true)
            }
            setLoss(loss + Score);
            setScore(0);
            setAttempts(1)
            setBlueArray([
                1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
                21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
                41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,
                61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,
                81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,
                101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,
                121,123,124,125,126,127,128
            ])
            setCount(1)
            setLastBalloon(0)
      }else{
        setCount(Count+0.15); //===============???????
        console.log(Count*30,Count*50);
        setScore(Score + 0.05);
        setAttempts(attempts+1)
      }
    
    
    }
      
      
      
      else {
        
        if(index === 1){
        for (let index = 0; index< 8; index++) {
            setrandom(Math.floor(Math.floor((Math.random()*8))));
            console.log(random);
            if ( temp !== random && random > attempts ) 
            {
            setTemp(random); 
            break;
            }
          }

        for (let index = 0; index < OrangeArray.length; index++) {
           if ( index === random ) 
           {OrangeArray[index]= 0;}
         }
         setOrangeArray([...OrangeArray]);
      
      if (OrangeArray[attempts] === 0){
        setRisk(Risk+1)
        new Audio(Pop).play()
            setoriginal(false);
            setpumpO(true)
            setTimeout(() => {
                setpumpO(false)
                setpumpT(true)   
            }, 200);
            setTimeout(() => {
                setpumpT(false)
                setIndex(Math.floor(Math.floor((Math.random()*3))))
                setoriginal(true)   
            }, 400);
            setnum(num+1)
            if (num === 15)
            {
            setRiskRatio( (Risk / 15)*100 );
            setOpenPopup(true)
            }
            setLoss(loss + Score);
            setScore(0);
            setAttempts(1)
            setOrangeArray([
                1,2,3,4,5,6,7,8
            ])
            setCount(1)
            setLastBalloon(0)
      }else{
        setCount(Count+0.15);
        console.log(Count*30,Count*50);
        setScore(Score + 0.05);
        setAttempts(attempts+1)
      }}
      
      
      else {
        
        if(index === 2){
        setrandom(Math.floor(Math.floor((Math.random()*32))));
        for (let index = 0; index < 32; index++) {
            setrandom(Math.floor(Math.floor((Math.random()*32))));
            console.log(random);
            if ( temp !== random && random > attempts ) 
            {
            setTemp(random); 
            break;
            }
          }

        for (let index = 0; index < YellowArray.length; index++) {
           if ( index === random ) 
           {YellowArray[index]= 0;}
         }
         setYellowArray([...YellowArray]);
      
      if (YellowArray[attempts] === 0){
        setRisk(Risk+1)
        new Audio(Pop).play()
            setoriginal(false);
            setpumpO(true)
            setTimeout(() => {
                setpumpO(false)
                setpumpT(true)   
            }, 200);
            setTimeout(() => {
                setpumpT(false)
                setIndex(Math.floor(Math.floor((Math.random()*3))))
                setoriginal(true)   
            }, 400);
            setnum(num+1)
            if (num === 15)
            {
            setRiskRatio( (Risk / 15)*100 );
            setOpenPopup(true)
            }
            setLoss(loss + Score);
            setScore(0);
            setAttempts(1);
            setYellowArray([
                1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
                21,22,23,24,25,26,27,28,29,30,31,32
            ])
            setCount(1)
            setLastBalloon(0)
      }else{
        setCount(Count+0.15);
        console.log(Count*30,Count*50);
        setScore(Score + 0.05);
        setAttempts(attempts+1)
      }
    }
    
    
    }}

        
    }

function collect(){
    setLastBalloon(Score)
    setTotal(Total+Score);
    console.log(Score)
    setnum(num+1) 
    setAttempts(1) 
    setCount(1)
    //
    notify()
    //
    setScore(0) 
    setIndex(Math.floor(Math.floor((Math.random()*3)))) //New Balloon
    setYellowArray([
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
        21,22,23,24,25,26,27,28,29,30,31,32
    ])
    setOrangeArray([
        1,2,3,4,5,6,7,8
    ])
    setBlueArray([
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
        21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
        41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,
        61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,
        81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,
        101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,
        121,123,124,125,126,127,128
    ])
    if (num === 15)
    { 
      CalculateScore ()
      setOpenPopup(true)
     }
}

function CalculateScore (){
  setRiskRatio( (Risk / 15)*100 );
  var gain = Total;
  var Loss = loss; 
}
return (
    <div className=" "> 
     <div className="progressbar">
        <div className="progressbar">
          <div className="progressbar__label">{Math.floor((num*6.66))}%</div>
        <progress className="progressbar__fill" value={num} max={15} />
    </div>
      </div>
      <div className='cash-container shadow '>

        <div className="amount">
          <div className="icon-cash">
          <div className="cash"  style={{ 
            transition: "background-color 1s ease-in-out" 
            }}>
            <h1 className="cash-name">مجموع الربح </h1>
            <h1 className="cash-name">:</h1>
            <h1 className="cash-amount">
              {" "}
              {Total.toFixed(2)}{" "}
            </h1>
            <h1 className="cash-name"> ريال   <br/> </h1>
            </div>
          </div>
        </div>


        <div className="amount">
          <div className="icon-cash">
          <div className="cash"  style={{ 
            // backgroundColor: colors[colorIndex], 
            transition: "background-color 1s ease-in-out" 
            }}>
            <h1 className="cash-name"> ربح البالون الأخير </h1>
            <h1 className="cash-name">:</h1>
            <h1 className="cash-amount">
              {" "}
              {LastBalloon.toFixed(2)}{" "}
            </h1>
            <h1 className="cash-name"> ريال </h1>
            
           </div>
          </div>
        </div>

      </div>

    <ToastContainer position="bottom-left"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      />        
    <div className="imgContainer">
      { original && <center><img src= {items[index].img} alt="" style={ {display: 'flex', width: +  Count*30 + 'px', height: +  Count*50 + 'px'} } /></center> }
      { pumpO && <center><img src= {Animation[index].img} alt="" style={ {display: 'flex', width: +  Count*30 + 'px', height: +  Count*50 + 'px'} } /></center> }
      { pumpT && <center><img src= {animation[index].img} alt="" style={ {display: 'flex', width: +  Count*30 + 'px', height: +  Count*50 + 'px'} } /></center> }
    </div>
    <h1 className="cash-amount">
              {" "}
              {Score.toFixed(2)}{" "}
            </h1>
    <div className="btnContainer">
      <button className="tbutton tbuttonColorCyan" onClick={collect}> جمع </button>
      <button className="tbutton tbuttonColorBlue"  onClick={ handleClick } > زيادة الحجم </button>
    </div>
             <Popup
                title={"انتهى التقييم" }
                // children= {'Risk Taking Ratio: %'+RiskRatio.toFixed(2)}
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >      
            </Popup>
    </div>
)
}export default Balloons

