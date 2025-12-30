import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import NotFound from './pages/NotFound';
import AppLayout from './components/layout/AppLayout';
import { theme } from './theme/Theme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
function App() {
  return (
    <ThemeProvider theme={theme }>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route path='/' element= {<Home />} />
            <Route path='/report' element= {<Report />} />
          </Route>
          <Route path='*' element= {<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>

  );
}

export default App;
