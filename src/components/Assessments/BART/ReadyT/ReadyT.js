import './ReadyT.css';

// import 'react-html5video/dist/styles.css';
import React, { useState } from 'react';

// import { DefaultPlayer as Video } from 'react-html5video/dist';
import { Link } from 'react-router-dom';

import Background from '../../../Background/Background';
import Videopopup from '../../../Videopopup';
import demo from '../assets/BRAT.mp4';

function ReadyT(){
    const [openPopup, setOpenPopup] = useState(false);

    function handleOpen(){
        setOpenPopup(true)
    }

    function handleClose(){
        setOpenPopup(false)
    } 

    return (
        <div className="Ready1">

            <h1 className='title'> مهمة  </h1> 

            <div className="tips">
                <h3 className='tips-header'> 
                .سيُقدم لك ١٥ بالونًا ، واحدًا تلو الآخر.
                يمكنك النقر فوق الزر المسمى "زيادة" لزيادة حجم البالون
                <br/><br/>
                .ستجمع 5 هللات في بنك مؤقت لكل زيادة. سيظهر لك المبلغ المتراكم في مصرفك المؤقت
                <br/> <br/>
                في أي وقت ، يمكنك التوقف عن ضخ البالون والنقر على الزر المسمى "جمع". 
                سيؤدي النقر فوق هذا الزر إلى بدء تشغيل البالون التالي
                <br/><br/>
                ." وتحويل الأموال المتراكمة من مصرفك المؤقت إلى مصرفك الدائم المسمى "إجمالي الأرباح
                <br/><br/>
                .ولكن كن على دراية بأن البالون سينفجر في مرحلة ما، تختلف نقطة الانفجار عبر البالونات
                <br/> <br/>
                .إذا انفجر البالون قبل النقر فوق "جمع" ، فإنك تنتقل إلى البالون التالي وتفقد جميع الأموال الموجودة فيه
 
                </h3>
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

            <div className='button-justifyer'>
                <Link to="/Balloons" className="btnt"> ابدأ</Link>
                <button className="btnt2" onClick={handleOpen}>فيديو توضيحى</button>
            </div>

   
            <Background height="100%"/>
        </div>
)


}export default ReadyT
