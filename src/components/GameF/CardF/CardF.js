import "./CardF.css";
import React from "react";
function CardF({item, id}){
    if (item.stat === 'active'){
    return (
       <div className={"card"} >
            <img src={item.img} alt="" />
        </div>
    )}
    return(
        <div></div>
    )
}export default CardF
