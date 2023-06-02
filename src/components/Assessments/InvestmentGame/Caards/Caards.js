import './caard.css';

import { useState } from 'react';

import Fade from 'react-reveal';

import Popup from '../../VSGame/Popup/Popup';
import Caard from './Caard';

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
    const [Risk, setRisk] = useState(0);
    const [loss, setLoss] = useState(0);
    


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
                    setLoss(loss+Score);
                    setTotal(Total - Score)
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
        {
          CalculateScore ();
          setOpenPopup(true);
        }
}

function CalculateScore (){
  var RiskRatio = ( Risk / 30 )*100 ;
  var gain = Total;
  var Loss = loss ;
}
//===========================================

    return (
       <div>
        <div className="progressbar">
        <div className="progressbar">
          <div className="progressbar__label">{Math.floor((num*3.3))}%</div>
        <progress className="progressbar__fill" value={num} max={30} />
    </div>
      </div>

      <div className='cash-container shadow'>
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
            <h1 className="cash-name">مجموع الجولة {num} </h1>
            <h1 className="cash-name">:</h1>
            <h1 className="cash-amount">
              {" "}
              {Score.toFixed(2)}{" "}
            </h1>
            <h1 className="cash-name"> ريال </h1>
            
           </div>
          </div>
        </div>
      </div>

      <Fade left >
      <div className='button-justifyer50 '>
      <button className="btntw float-right" onClick={Clicked}> جمع </button>
      </div>
      </Fade>
       {/* <div className='progressBar'>
        <Line percent={num*3.333} />
        </div> 
        <div className="bar">
        <button className="button" onClick={Clicked}> <h3> جمع </h3></button>
        <div className='Score'><p> المجموع: {Total}</p>
        <p> مجموع الجولة {num} : {Score}</p></div>
        </div> */}
        <div className="containerF mx-auto">
            { items.map((item, index) => (
                <Caard key={index} item={item} id={index} handleClick={handleClick} className="mx-auto card-adds"/>
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