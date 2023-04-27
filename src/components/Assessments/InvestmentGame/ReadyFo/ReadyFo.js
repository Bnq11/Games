import React from 'react';
import  '../../CPT/ReadyS/ReadyS.css';
import { Link } from 'react-router-dom';

function ReadyFo(){
    return (
    <div className="Ready">
    <h1> مهمة </h1>
    <div className="tips1">
<h3> 
. ستبدأ كل جولة لعبة جديدة برصيد 0 من النقاط وتظهر جميع البطاقات الـ 32 بعلامة الاستفهام 
<br/><br/>
. يمكنك قلب البطاقات بطاقة تلو الأخرى سواء كانت البطاقة التي تم قلبها  بطاقة - ذات وجه مبتسم - أو بطاقة خسارة
<br/> <br/>
. تستمر الجولة وتزداد النقاط حتى تقوم بالتوقف من خلال النقر على زر "جمع" أو حتى تظهر بطاقة الخسارة ما يؤدي إلى خسارة كبيرة للنقاط 
<br/><br/>
</h3>
</div>

   <div className="btn"> 
       <Link to="/InvestmentCards" className="btn"> <h3> ابدأ </h3></Link>
   </div>
</div>
)
    }export default ReadyFo