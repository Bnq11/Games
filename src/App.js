import Ready from './components/Assessments/VSGame/Ready/Ready';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cards from './components/Assessments/VSGame/Cards/Cards';
import ReadyS from './components/Assessments/CPT/ReadyS/ReadyS';
import Main from './components/Main';
import React from 'react';
import Letters from './components/Assessments/CPT/Letters/Letters';
import ReadyT from './components/Assessments/BART/ReadyT/ReadyT';
import Balloons from './components/Assessments/BART/Balloon/Balloon';
import ReadyFo from './components/Assessments/InvestmentGame/ReadyFo/ReadyFo';
import Caards from './components/Assessments/InvestmentGame/Caards/Caards';



function App() {
  return (
    <div className="App">
  <Router>
    <Routes>
<Route path='/' element={<Main/>}> </Route>
<Route path='/VSGame' element={<Ready/>}></Route>
<Route path='/Cards' element={<Cards startTimer= {true}/>}></Route>
<Route path='/CPT' element={<ReadyS/>}></Route>
<Route path='/Letters' element={<Letters/>}></Route>
<Route path='/BART' element={<ReadyT/>}></Route>
<Route path='/Balloons' element={<Balloons/>}></Route>
<Route path='/InvestmentGame' element={<ReadyFo/>}></Route>
<Route path='/InvestmentCards' element={<Caards/>}></Route>
    </Routes>
    </Router>  
    </div>
  );
}

export default App;
