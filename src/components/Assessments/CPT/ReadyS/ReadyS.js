import React from 'react';
import  './ReadyS.css';
import { Link } from 'react-router-dom';

function ReadyS(){
    return (
    <div className="Ready">
    <h1> مهمة </h1>
   <div className="tips">
    <h5> </h5>
</div>

   <div className="btn"> 
       <Link to="/Letters" className="btn"> <h3> ابدأ </h3></Link>
   </div>
</div>
)





}export default ReadyS