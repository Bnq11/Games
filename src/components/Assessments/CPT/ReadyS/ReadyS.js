import './ReadyS.css';

import React from 'react';

import { Link } from 'react-router-dom';

import Background from '../../../Background/Background';

function ReadyS(){
    return (
    <div className="Ready">
        <h1 className='title'> مهمة الاداء المستمر  </h1>
        <div className="tips">
        <h3 className='tips-header'> 
            سيتم عرض مجموعة من الاحرف الرجاء الضغط على الزر المسمى بـ"هدف" اذا كان 
            <br/><br/>
             . ماعدا ذلك هدف "X" الحرف المعروض ليس

        </h3>
        </div>

        <div className="button-justifyer"> 
            <Link to="/Letters" className="btnt">ابدأ</Link>
        </div>
        <Background/>
    </div>
)





}export default ReadyS