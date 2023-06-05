import "./Layout.css";
import Swal from "sweetalert2";

import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { GiCardRandom } from "react-icons/gi";
import { RiEmotionHappyLine, RiEmotionUnhappyLine } from "react-icons/ri";
import { VscDebugStart } from "react-icons/vsc";

function Layout() {
  const [isAdvantageous, setIsAdvantageous] = useState();
  const [cash, setCash] = useState(0);
  const [amount, setAmount] = useState();
  const [count, setCount] = useState(1);
  const [report , setReport]=useState('');
  const [gain, setgain] = useState(0);
  const [loss, setloss] = useState(0);

  function handleClick(cardName) {
    console.log(`Clicked on card ${cardName}`);
    // Add code here to update the amount of cash and borrowed

    // Define the probabilities of getting an advantageous or disadvantageous card for each deck
    const probabilities = {
      A: [0.5, 0.5],
      B: [0.1, 0.9],
      C: [0.5, 0.5],
      D: [0.1, 0.9],
    };

    // Generate a random number to determine if the card is advantageous or disadvantageous
    const random = Math.random();
    const isAdvantageous = random < probabilities[cardName][1];

    // Calculate the amount earned or borrowed based on the selected card
    let amount = 0;
    if (isAdvantageous){
      if(cardName === "A" || cardName === "B") 
      { amount = 100 ; setgain(gain+amount)} else{ amount = 50 ; setgain(gain+amount)}}
      else{ 
      if (cardName === "A" || cardName === "B")
      { amount = -500; setloss(loss+amount)}
      else{ 
        if(cardName === "C" ){
          amount = -50; setloss(loss+amount)
        } else{
       amount = -250; setloss(loss+amount)}
      }
      }
    // Update the amount of cash
    setCash((prevCash) => prevCash + amount);
    setCount((prevCount) => prevCount + 1);
    setIsAdvantageous(isAdvantageous);
    setAmount(amount);
    console.log("count", count);
    setReport(report+'\n'+ "المحاولة :" +count+'\n'+"نوع البطاقة: "+cardName+"| مبلغ البطاقة: " +amount +"| المبلغ الأساسي: " + cash)
    console.log(report)
    
  }


  function done_alert() {
    Swal.fire({
      title: "!ممتاز ",
      text: "أنهيت الاختبار بنجاح",
      icon: "success",
      confirmButtonColor:"#32437c",
      confirmButtonText: "حسنا",
      width: "400px",
    }).then(() => {
      // Reload the page to restart the game
      window.location.reload();
    });
  }

  // Check the count value after every update
  useEffect(() => {
    if (count === 100) {
      CalculateScore ();
      // console.log(cash,gain,loss, report)
      done_alert();
    }
  }, [count]);

  function CalculateScore (){
    var Cash = cash;
    var Gain = gain;
    var Loss = loss ;
    var Report = report;
    // report
  }
  return (
    <Container fluid className="first-container">
      {/* First section */}
      <div className="progressbar">
        <progress value={count} max={100} />
      </div>

      {/* second section */}
      <div className="amount">
        <div className="cash">
          <h3 className="cash-name">الربح</h3>
          <h3 className="cash-name">:</h3>
          <h3 className="cash-name"></h3>
          <h3 className={cash > 0 ? "positive" : cash < 0 ? "negative" : ""}>
            {" "}
            {cash}{" "}
          </h3>
          <h3 className="cash-name"> ريال </h3>
        </div>
      </div>

      {/* third section */}
      <div className="alert">
        {console.log("in msg", isAdvantageous)}

        {isAdvantageous ? (
          <div className="alert-body">
            <RiEmotionHappyLine
              size={100}
              color="rgb(76, 148, 76)
"
            />
            <div className="alert-message">
              <h3 className="titleWin"> ربحت</h3>
              <h3 className="alert-positive">{amount}</h3>
              <h3 className="titleWin"> ريال </h3>
            </div>
          </div>
        ) : isAdvantageous === false ? (
          <div className="alert-body">
            <RiEmotionUnhappyLine size={100} color="rgb(211, 81, 81)" />
            <div className="alert-message">
              <h3 className="titleLose"> خسرت</h3>
              <h3 className="alert-negative">{amount}</h3>
              <h3 className="titleLose"> ريال </h3>
            </div>
          </div>
        ) : (
          <div className="alert-body">
            <VscDebugStart size={130} color="black" />
            <div className="alert-message">
              <h3> انقر على بطاقة للبدء</h3>
            </div>
          </div>
        )}
      </div>
      {/* fourth section */}
      <div className="card-deck">
        <div className="card5" onClick={() => handleClick("D")}>
          <GiCardRandom size={200} color="32437c" />
          <h3 className="card-name">بطاقة د</h3>
        </div>

        <div className="card5" onClick={() => handleClick("C")}>
          <GiCardRandom size={200} color="32437c" />
          <h3 className="card-name">بطاقة ج</h3>{" "}
        </div>

        <div className="card5" onClick={() => handleClick("B")}>
          <GiCardRandom size={200} color="32437c" />
          <h3 className="card-name">بطاقة ب</h3>{" "}
        </div>

        <div className="card5" onClick={() => handleClick("A")}>
          <GiCardRandom size={200} color="32437c" />
          <h3 className="card-name">بطاقة أ</h3>{" "}
        </div>
      </div>
    </Container>
  );
}

export default Layout;
