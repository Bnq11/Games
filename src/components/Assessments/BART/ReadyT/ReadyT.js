
import React from 'react';
import  './ReadyT.css';
import { Link } from 'react-router-dom';
import { DefaultPlayer as Video } from 'react-html5video/dist';
import demo from '../assets/BRAT.mp4';
import 'react-html5video/dist/styles.css';

function ReadyT(){
    return (

<div className="Ready1">
<h1> مهمة  </h1> 
<Video autoPlay loop >
    <source src='demo' type='video/webm'></source>
    </Video>
<div className="tips1">
<h3> 
.سيُقدم لك ١٥ بالونًا ، واحدًا تلو الآخر.
يمكنك النقر فوق الزر المسمى "زيادة" لزيادة حجم البالون
<br/><br/>
.ستجمع 5 هللات في بنك مؤقت لكل زيادة. سيظهر لك المبلغ المتراكم في مصرفك المؤقت
<br/> <br/>
 في أي وقت ، يمكنك التوقف عن ضخ البالون والنقر على الزر المسمى "جمع". 
سيؤدي النقر فوق هذا الزر إلى بدء تشغيل البالون التالي  
<br/><br/>
." وتحويل الأموال المتراكمة من مصرفك المؤقت إلى مصرفك الدائم المسمى "إجمالي الأرباح
<br/><br/>
.ولكن كن على دراية بأن البالون سينفجر في مرحلة ما، تختلف نقطة الانفجار عبر البالونات
<br/> <br/>
.إذا انفجر البالون قبل النقر فوق "جمع" ، فإنك تنتقل إلى البالون التالي وتفقد جميع الأموال الموجودة فيه
<br/> <br/>
<br/> <br/>
</h3>
</div>

<div className="btn"> 
       <Link to="/Balloons" className="btn"> <h3> ابدأ </h3></Link>
    </div>
</div>
)


}export default ReadyT