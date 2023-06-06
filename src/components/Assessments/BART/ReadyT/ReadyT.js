import './ReadyT.css';

// import 'react-html5video/dist/styles.css';
import React, { useState } from 'react';

// import { DefaultPlayer as Video } from 'react-html5video/dist';
import { Link } from 'react-router-dom';

import Background from '../../../Background/Background';
import Videopopup from '../../../Videopopup';
import demo from '../assets/BRAT.mp4';
import { useSearchParams,useNavigate } from 'react-router-dom';

function ReadyT(){
    const [openPopup, setOpenPopup] = useState(false);
    const [card1,setCard1] = useState(false)
    const [card2,setCard2] = useState(false)
    const [card3,setCard3] = useState(false)
    const [searchParams,setSearchParams] = useSearchParams();
    const query = searchParams.get("serial_number");
    const query2 = searchParams.get("assessment_id");
    const navigate = useNavigate();

    function handleOpen(){
        setOpenPopup(true)
    }

    function handleClose(){
        setOpenPopup(false)
    } 
const handleClick = () => {
        const sid = `?serial_number=${query}&assessment_id=${query2}`
        navigate(`/Balloons${sid}`)
    }
    return (
        <div className="Ready1">

            <h1 className='title'> مهمة  </h1> 

            <div className="tips">
                <div className='headersandbutton my-1'>
                <h3 className='tips-header'> 
                .سيُقدم لك ١٥ بالونًا ، واحدًا تلو الآخر.
                يمكنك النقر فوق الزر المسمى "زيادة" لزيادة حجم البالون
                </h3>
                <button className='btnt m-0' onClick={()=>setCard1(true)}>التالي</button>
                </div>
                {card1 &&
                <div className='headersandbutton my-1' >
                <h3 className='tips-header'> 
                .ستجمع 5 هللات في بنك مؤقت لكل زيادة. سيظهر لك المبلغ المتراكم في مصرفك المؤقت
                
                في أي وقت ، يمكنك التوقف عن ضخ البالون والنقر على الزر المسمى "جمع". 
                سيؤدي النقر فوق هذا الزر إلى بدء تشغيل البالون التالي
                </h3>
                <button className='btnt m-0' onClick={()=>setCard2(true)}>التالي</button>
                </div>
                }
                {card2 &&
                <div className='headersandbutton my-1'>
                <h3 className='tips-header'> 
                ." وتحويل الأموال المتراكمة من مصرفك المؤقت إلى مصرفك الدائم المسمى "إجمالي الأرباح
                .ولكن كن على دراية بأن البالون سينفجر في مرحلة ما، تختلف نقطة الانفجار عبر البالونات
                .إذا انفجر البالون قبل النقر فوق "جمع" ، فإنك تنتقل إلى البالون التالي وتفقد جميع الأموال الموجودة فيه
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
            { card3 &&
            <div className='button-justifyer'>
                {/* <Link to="/Balloons" className="btnt"> ابدأ</Link> */}
                <div onClick={() => handleClick()} className="btnt"> ابدأ</div>
                <button className="btnt2" onClick={handleOpen}>فيديو توضيحى</button>
            </div>
            }
   
            {/* <Background height="100%"/> */}
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


}export default ReadyT
