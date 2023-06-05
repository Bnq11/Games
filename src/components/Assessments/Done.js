import React, {
    useEffect,
    useState,
  } from 'react';
import Swal from 'sweetalert2';

function Done(){
    function done(){
    Swal.fire({
        text: "أنهيت الاختبار بنجاح",
        icon: "success",
        width: "400px",
      })
    }
    return(
    <div>
    {done()}
    </div>
)
}
export default Done