import { useState } from 'react'
import { Link } from "react-router-dom"
import "./Ready.css"
import Card from "../Card/Card"
import React from 'react'

function Ready(){
    const [cards] = useState([
        { id: 1, img: '/img/1rt.png', stat:"active" },
        { id: 2, img: '/img/2gs.png',  stat:"active"},
        { id: 3, img: '/img/3yb.png',  stat:"active"},
        { id: 4, img: '/img/4bc.png',  stat:"active"},
    ]);
 
    return (
        <div className="Ready">
             <h1> مهمة فرز البطاقات </h1>
            <div className="tips">
             <h5> .ستحصل على مجموعتين من البطاقات ، كل واحدة تحتوي على 64 بطاقة <br/>
              .سيتم عرض بطاقة واحدة في كل مرة وسيُطلب منك فرزها، يمكنك فرز البطاقة من خلال النقر فوق إحدى البطاقات الأربع التي تراها أدناه <br/>
             .بحسب اللون،او الشكل، او العدد. عندما تفرز البطاقة بشكل صحيح ، ستظهر كلمة "صحيح" على الشاشة <br/>
             ."ولكن إذا تم فرز البطاقة بشكل خاطئ، فستظهر كلمة "خطأ <br/>
            .الهدف هو الحصول على أكبر عدد ممكن من البطاقات الصحيحة </h5>
</div>
<div className="container">
        { cards.map((card, index) => (
           <Card key={index} item={card} id={index}/>
             )) }
             </div>
            <div className="btn"> 
                <Link to="/Cards" className="btn"> <h3> ابدأ </h3></Link>
            </div>
        </div>
    )

}export default Ready