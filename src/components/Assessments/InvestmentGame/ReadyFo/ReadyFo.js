import '../../CPT/ReadyS/ReadyS.css';

import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Background from '../../../Background/Background';
import Videopopup from '../../../Videopopup';
import demo from '../../BART/assets/BRAT.mp4';

function ReadyFo(){
    const [openPopup, setOpenPopup] = useState(false);
    const [card1,setCard1] = useState(false)
    const [card2,setCard2] = useState(false)
    const [card3,setCard3] = useState(false)
    function handleOpen(){
        setOpenPopup(true)
    }

    function handleClose(){
        setOpenPopup(false)
    } 

    return (
    <div className="Ready">
    <h1 className='title'> مهمة </h1>

    <div className="tips">
                <div className='headersandbutton my-1'>
                <h3 className='tips-header'> 
            . ستبدأ كل جولة لعبة جديدة برصيد 0 من النقاط وتظهر جميع البطاقات الـ 32 بعلامة الاستفهام 
                </h3>
                <button className='btnt m-0' onClick={()=>setCard1(true)}>التالي</button>
                </div>
                {card1 &&
                <div className='headersandbutton my-1' >
                <h3 className='tips-header'> 
            . يمكنك قلب البطاقات بطاقة تلو الأخرى سواء كانت البطاقة التي تم قلبها  بطاقة - ذات وجه مبتسم - أو بطاقة خسارة
                </h3>
                <button className='btnt m-0' onClick={()=>setCard2(true)}>التالي</button>
                </div>
                }
                {card2 &&
                <div className='headersandbutton my-1'>
                <h3 className='tips-header'> 
            . تستمر الجولة وتزداد النقاط حتى تقوم بالتوقف من خلال النقر على زر "جمع" أو حتى تظهر بطاقة الخسارة ما يؤدي إلى خسارة كبيرة للنقاط 
                </h3>
                <button className='btnt m-0' onClick={()=>setCard3(true)}>التالي</button>
                </div>
                }
            </div>
            
            <Videopopup
                title={"انتهى التقييم" }
                children= {
                <video autoPlay loop controls width="640" height="480" style={{zIndex:1,borderRadius:"25px"}}>
                    <source src={demo} type='video/webm' ></source>
                </video>}
                openPopup={openPopup}
                handleClose={handleClose}
            />  
    {card3&&         
   <div className="button-justifyer"> 
       <Link to="/InvestmentCards" className="btnt"> ابدأ </Link>
        <button className="btnt2" onClick={handleOpen}>فيديو توضيحى</button>
   </div>
   }   
   {/* <Background/> */}
   <ul className="circlesRisk" style={{ height:"100%" }}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul> 
</div>
)
    }export default ReadyFo