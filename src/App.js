import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Balloons from './components/Assessments/BART/Balloon/Balloon';
import ReadyT from './components/Assessments/BART/ReadyT/ReadyT';
import Letters from './components/Assessments/CPT/Letters/Letters';
import ReadyS from './components/Assessments/CPT/ReadyS/ReadyS';
import Caards from './components/Assessments/InvestmentGame/Caards/Caards';
import ReadyFo from './components/Assessments/InvestmentGame/ReadyFo/ReadyFo';
import Cards from './components/Assessments/VSGame/Cards/Cards';
import Ready from './components/Assessments/VSGame/Ready/Ready';
import Main from './components/Main';
import Ultimatum from './components/Assessments/Ultimatum/Ultimatum';
import Layout from './components/Assessments/Layout/Layout';

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
          <Route path='/Ultimatum' element={<Ultimatum/>}></Route>
          <Route exact path="/Layout" element={<Layout/>} />
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
