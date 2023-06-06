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
import Done from './components/Assessments/Done';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Cells</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Router>
        <Routes>
          <Route path='/' element={<Main />}> </Route>
          {/*1. attention - visual scanning game */}
          <Route path='/VSGame' element={<Ready />}></Route>
          <Route path='/Cards' element={<Cards startTimer={true} />}></Route>

          {/*1. attention - continous performance */}
          <Route path='/CPT' element={<ReadyS />}></Route>
          <Route path='/Letters' element={<Letters />}></Route>

          {/*3. risk - balloon */}
          <Route path='/BART' element={<ReadyT />}></Route>
          <Route path='/Balloons' element={<Balloons />}></Route>

          {/*3. risk - investment */}
          <Route path='/InvestmentGame' element={<ReadyFo />}></Route>
          <Route path='/InvestmentCards' element={<Caards />}></Route>

          {/*2. decision making - ultimatum */}
          <Route path='/Ultimatum' element={<Ultimatum />}></Route>

          {/*2. decision making - lowa gambling */}
          <Route exact path="/Layout" element={<Layout />} />

          <Route exact path="/Done" element={<Done />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
