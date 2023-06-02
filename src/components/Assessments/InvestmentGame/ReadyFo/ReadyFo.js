import '../../CPT/ReadyS/ReadyS.css';

import React from 'react';

import { Link } from 'react-router-dom';

import Background from '../../../Background/Background';

function ReadyFo(){
    return (
    <div className="Ready">
    <h1 className='title'> مهمة </h1>
    <div className="tips">
        <h3 className='tips-header'> 
            . ستبدأ كل جولة لعبة جديدة برصيد 0 من النقاط وتظهر جميع البطاقات الـ 32 بعلامة الاستفهام 
            <br/><br/>
            . يمكنك قلب البطاقات بطاقة تلو الأخرى سواء كانت البطاقة التي تم قلبها  بطاقة - ذات وجه مبتسم - أو بطاقة خسارة
            <br/> <br/>
            . تستمر الجولة وتزداد النقاط حتى تقوم بالتوقف من خلال النقر على زر "جمع" أو حتى تظهر بطاقة الخسارة ما يؤدي إلى خسارة كبيرة للنقاط 
            <br/><br/>
        </h3>
    </div>

   <div className="button-justifyer"> 
       <Link to="/InvestmentCards" className="btnt"> ابدأ </Link>
   </div>
   <Background/>
</div>
)
    }export default ReadyFo