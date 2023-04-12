import Ready from './components/GameF/Ready/Ready';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cards from './components/GameF/Cards/Cards';
import ReadyS from './components/GameS/ReadyS/ReadyS';
import Main from './components/Main';
import React from 'react';


function App() {
  return (
    <div className="App">
  <Router>
    <Routes>
<Route path='/' element={<Main/>}> </Route>
<Route path='/ReadyF' element={<Ready/>}></Route>
<Route path='/Cards' element={<Cards/>}></Route>
<Route path='/ReadyS' element={<ReadyS/>}></Route>
    </Routes>
    </Router>  
    </div>
  );
}

export default App;
