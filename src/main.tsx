import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import './index.css';
import Home from './Home.tsx';
import About from './About.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>


        <Route path='/' element={<Navigate to='/home' />} />

        <Route path='/home' element={<Home />} />

        <Route path='/about' element={<About />} />


      </Routes>
    </HashRouter>
  </StrictMode>,
)
