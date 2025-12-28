import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/report' element= {<Report />} />
        <Route path='*' element= {<NotFound />} />
      </Routes>

    </Router>

  );
}

export default App;
