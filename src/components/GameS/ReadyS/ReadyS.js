
import { useEffect ,useState} from 'react'
import React from 'react';
import  './ReadyS.css';

function ReadyS(){
    const [Letters] = useState([
        { id: 1, str:'A' },
        { id: 2, str:'B' },
        { id: 3, str:'C' },
        { id: 4, str:'D' },
        { id: 5, str:'E' },
        { id: 6, str:'F' },
        { id: 7, str:'G' },
        { id: 8, str:'H' },
        { id: 9, str:'I' },
        { id: 10, str:'J' },
        { id: 11, str:'K' },
        { id: 12, str:'L'  },
        { id: 13, str:'M'  },
        { id: 14, str:'N'  },
        { id: 15, str:'O'  },
        { id: 16, str:'P'  },
        { id: 17, str:'Q'  },
        { id: 18, str:'R'  },
        { id: 19, str:'S'  },
        { id: 20, str:'T'  },
        { id: 21, str:'U'  },
        { id: 22, str:'V'  },
        { id: 23, str:'W'  },
        { id: 24, str:'X'  },
        { id: 25, str:'Y'  },
        { id: 26, str:'Z'  },
    ].sort(() => Math.random() - 0.5))
    const onKeyDown = (e) => {
      if (e.key === " ") handleClick(true);
    };
  function handleClick(){
console.log('spacebar')
  }
    useEffect(() => {
      window.addEventListener("keydown", onKeyDown);
      });
  
    return (
      <div className="containerReadyS">
        <h1 className='h1readyS'>H</h1>
      </div>
    );
  





}export default ReadyS