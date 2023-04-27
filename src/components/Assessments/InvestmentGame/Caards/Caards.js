
import { useState } from 'react'
import './caard.css'
import Caard from './Caard'
import { Line } from 'rc-progress'
import Popup from '../../VSGame/Popup/Popup'


function Caards(){

    const [items, setItems] = useState([
        { id: 1, img: '/img/Loss.png', stat: "" },
        { id: 2, img: '/img/smiley.png', stat: "" },
        { id: 3, img: '/img/smiley.png', stat: "" },
        { id: 4, img: '/img/smiley.png', stat: "" },
        { id: 5, img: '/img/smiley.png', stat: "" },
        { id: 6, img: '/img/smiley.png', stat: "" },
        { id: 7, img: '/img/smiley.png', stat: "" },
        { id: 8, img: '/img/smiley.png', stat: "" },
        { id: 9, img: '/img/smiley.png', stat: "" },
        { id: 10, img: '/img/smiley.png', stat: "" },
        { id: 11, img: '/img/smiley.png', stat: "" },
        { id: 12, img: '/img/smiley.png', stat: "" },
        { id: 13, img: '/img/smiley.png', stat: "" },
        { id: 14, img: '/img/smiley.png', stat: "" },
        { id: 15, img: '/img/smiley.png', stat: "" },
        { id: 16, img: '/img/smiley.png', stat: "" },
        { id: 17, img: '/img/smiley.png', stat: "" },
        { id: 18, img: '/img/smiley.png', stat: "" },
        { id: 19, img: '/img/smiley.png', stat: "" },
        { id: 20, img: '/img/smiley.png', stat: "" },
        { id: 21, img: '/img/smiley.png', stat: "" },
        { id: 22, img: '/img/smiley.png', stat: "" },
        { id: 23, img: '/img/smiley.png', stat: "" },
        { id: 24, img: '/img/smiley.png', stat: "" },
        { id: 25, img: '/img/smiley.png', stat: "" },
        { id: 26, img: '/img/smiley.png', stat: "" },
        { id: 27, img: '/img/smiley.png', stat: "" },
        { id: 28, img: '/img/smiley.png', stat: "" },
        { id: 29, img: '/img/smiley.png', stat: "" },
        { id: 30, img: '/img/smiley.png', stat: "" },
        { id: 31, img: '/img/smiley.png', stat: "" },
        { id: 32, img: '/img/smiley.png', stat: "" },
    ].sort(() => Math.random() - 0.5))

    const [num, setnum] = useState(1);
    const [Score, setScore] = useState(0);
    const [Total, setTotal] = useState(0);
    const [openPopup, setOpenPopup] = useState(false);


    
    function Update(){
     for (let index = 0; index < items.length; index++) {
        items[index].stat="";
     }
        setScore (0) 
        items.sort(() => Math.random() - 0.5);
        setItems([...items])
    }
    function handleClick(id){
        console.log( items[id].id )
        if ( items[id].id !== 1 &&  items[id].stat === ""){
        items[id].stat = "active"
            setItems([...items])
            setScore(Score + 10)}
         if ( items[id].id === 1)
         {
                    items[id].stat = "active"
                    setItems([...items])
                    setnum(num +1 );
                    setTotal(Total - 250)
                    setTimeout(()=>{
                    Update();
                    if (num === 30)
                    {setOpenPopup(true)}
                    }, 1000)
                    setScore(0);
                }
    }
function Clicked(){
        setTotal (Total + Score)
        setnum(num +1 );
        Update();
        setScore(0);
        if (num === 30)
        {setOpenPopup(true)}
}
    return (
       <div>
       <div className='progressBar'>
        <Line percent={num*3.333} />
        </div> 
        <div className="bar">
        <button className="button" onClick={Clicked}> <h3> جمع </h3></button>
        <div className='Score'><p> المجموع: {Total}</p>
        <p> مجموع الجولة {num} : {Score}</p></div>
        </div>
        <div className="containerF">
            { items.map((item, index) => (
                <Caard key={index} item={item} id={index} handleClick={handleClick} />
            )) }
        </div>
        <Popup
                title={"انتهى التقييم" }
                // children = {"النقاط : "+ Score}
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >      
            </Popup>
        </div>
    )



}export default Caards