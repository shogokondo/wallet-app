import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AppLayout from './pages/layout/AppLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='/' element= {<Home />} />
        </Route>
        <Route path='*' element= {<NotFound />} />
      </Routes>

    </Router>

  );
}

export default App;
