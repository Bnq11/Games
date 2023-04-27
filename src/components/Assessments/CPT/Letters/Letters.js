// import { useEffect, useState } from 'react'
// import React from 'react';
// import  './Letters.css';
// import Popup from '../../GameF/Popup/Popup';

// function Letters(){

//     const [items] = useState([
//             { id: 1, img: 'A', stat: "" },
//             { id: 2, img: 'B', stat: "" },
//             { id: 3, img: 'C', stat: "" },
//             { id: 4, img: 'D', stat: "" },
//             { id: 5, img: 'E', stat: "" },
//             { id: 6, img: 'F', stat: "" },
//             { id: 7, img: 'G', stat: "" },
//             { id: 8, img: 'H', stat: "" },
//             { id: 9, img: 'I', stat: "" },
//             { id: 10, img: 'J', stat: "" },
//             { id: 11, img: 'K', stat: "" },
//             { id: 12, img: 'L', stat: "" },
//             { id: 13, img: 'M', stat: "" },
//             { id: 14, img: 'N', stat: "" },
//             { id: 15, img: 'O', stat: "" },
//             { id: 16, img: 'P', stat: "" },
//             { id: 17, img: 'Q', stat: "" },
//             { id: 18, img: 'R', stat: "" },
//             { id: 19, img: 'S', stat: "" },
//             { id: 20, img: 'T', stat: "" },
//             { id: 21, img: 'U', stat: "" },
//             { id: 22, img: 'V', stat: "" },
//             { id: 23, img: 'W', stat: "" },
//             { id: 24, img: 'X', stat: "" },
//             { id: 25, img: 'Y', stat: "" },
//             { id: 26, img: 'Z', stat: "" },
//         ].sort(() => Math.random() - 0.5))

//   // const  Letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   const [Start, setStart] = useState(true);
//   //  const [display, setdisplay] = useState(false);
//   // const [Char, setChar] = useState(Letter.charAt(Math.floor(Math.random()*Letter.length)));
//   //  const [Score, setScore] = useState(0);
//  const [openPopup, setOpenPopup] = useState(false);
//   const [num , setnum ] = useState(0)
  

//   useEffect(() => {
//     window.addEventListener("keydown", onKeyDown);
//     return() => console.log('CLEANUP')
//     },);
//     const onKeyDown = (e) => {
//       if (e.key === " "){ handleClick();}
//     };
//   function handleClick(){
//     setStart (false);
// console.log({num});
  
// // setdisplay(true)

// //     if (num === 0){
// //       setdisplay(true)
// //   setTimeout(()=>{
// //     setdisplay(false);
// //     setChar(Letter.charAt(Math.floor(Math.random()*Letter.length)));
// //     // setnum (num +1)
// //     console.log(num)
// //   }, 1000)
// // }
// // if ( num <= 20 )
// // setdisplay(false);
// // // setTimeout(()=>{
// //   setdisplay(true);
// //   setChar(Letter.charAt(Math.floor(Math.random()*Letter.length)));
// //   setnum (num +1)
// //   console.log(num)
// // // }, 2000)

// // if (Char === 'X'){
// //   setnum (num +1);
// //   handleClick();
// // }else{
// //     setScore(Score+1);
// //     console.log(Score);
// //   }

// console.log('spacebar')
// }
// function XXX({item, id}){
//   if (item.stat === 'active'){
//   return (
//      <div className={"card"} >
//           <h1 className='h1readyS'>{item.img}</h1>
//       </div>
//   )}
//   return(
//       <div></div>
//   )}
//  function next(){ if ( num < 360 ){
//     items[num].stat="";
//     items[num+1].stat = "active";
//     setnum(num+1);
//     // console.log(items);
// } else {if (num === 360 ){
// setOpenPopup(true);
// }}}
// return(

//   <div className="">
//     { Start && <center><h2> اضغط مسافة للبدء </h2></center>}
//      {/* { display && <h1 className='h1readyS'>{Char}</h1> }   */}
//    {  items.map((item, index) => (
//                  <XXX key={index} item={item} id={index} />
//              )) }

//           <Popup
//                 title={"أنتهى التقييم" }
//                 // children = {"النقاط : "+ Score}
//                 openPopup={openPopup}
//                 setOpenPopup={setOpenPopup}
//             >      
//             </Popup>
//   </div>
// )


// }export default Letters