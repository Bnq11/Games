import './Ready.css';

import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Background from '../../../Background/Background';
import Videopopup from '../../../Videopopup';
import demo from '../../BART/assets/BRAT.mp4';

// import Card from '../Card/Card';

function Ready(){
    const [openPopup, setOpenPopup] = useState(false);
    function handleOpen(){
        setOpenPopup(true)
    }
    const [card1,setCard1] = useState(false)
    const [card2,setCard2] = useState(false)
    const [card3,setCard3] = useState(false)
    function handleClose(){
        setOpenPopup(false)
    } 
    // const [cards] = useState([
    //     { id: 1, img: '/img/1rt.png', stat:"active" },
    //     { id: 2, img: '/img/2gs.png',  stat:"active"},
    //     { id: 3, img: '/img/3yb.png',  stat:"active"},
    //     { id: 4, img: '/img/4bc.png',  stat:"active"},
    // ]);
 
    return (
        
        <div className="Ready">
            <h1 className='title'> مهمة فرز البطاقات </h1>
            <div className="tips">
                <div className='headersandbutton my-1'>
                <h3 className='tips-header'> 
                    .ستحصل على مجموعتين من البطاقات ، كل واحدة تحتوي على 64 بطاقة
                </h3>
                <button className='btnt m-0' onClick={()=>setCard1(true)}>التالي</button>
                </div>
                {card1 &&
                <div className='headersandbutton my-1'>
                <h3 className='tips-header'> 
                    .ستحصل على مجموعتين من البطاقات ، كل واحدة تحتوي على 64 بطاقة <br/>
                    .سيتم عرض بطاقة واحدة في كل مرة وسيُطلب منك فرزها، يمكنك فرز البطاقة من خلال النقر فوق إحدى البطاقات الأربع التي تراها أدناه <br/>
                </h3>
                <button className='btnt m-0' onClick={()=>setCard2(true)}>التالي</button>
                </div>
                }
                { card2 &&
                <div className='headersandbutton my-1'>
                <h3 className='tips-header'> 
                    .بحسب اللون،او الشكل، او العدد. عندما تفرز البطاقة بشكل صحيح ، ستظهر كلمة "صحيح" على الشاشة <br/>
                    ."ولكن إذا تم فرز البطاقة بشكل خاطئ، فستظهر كلمة "خطأ <br/>
                    .الهدف هو الحصول على أكبر عدد ممكن من البطاقات الصحيحة 
                </h3>
                <button className='btnt m-0' onClick={()=>setCard3(true)}>التالي</button>
                </div>
                }
            </div>

            {/* <div className="container">
                { cards.map((card, index) => (
                    <Card key={index} item={card} id={index}/>
                    ))
                }
             </div>

                 */}

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
                <Link to="/Cards" className="btn">ابدأ</Link>
                <button className="btnt2" onClick={handleOpen}>فيديو توضيحى</button>
            </div>
            }

            <Background/> 
        </div>

    )

}export default Ready