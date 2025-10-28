import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import { breads } from './data.ts';

import './index.css';
import Home from './Home.tsx';
import About from './About.tsx';
import BreadPage from './components/BreadPage.tsx';
import Catalouge from './Catalouge.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>


        <Route path='/' element={<Navigate to='/home' />} />

        <Route path='/home' element={<Home />} />

        <Route path='/about' element={<About />} />

        <Route path='/catalouge' element={<Catalouge />} />

        {breads.map((bread, i) => (
          //@ts-ignore
          <Route key={i} path={`/breads/${bread.imgUrl.split('/').pop().split('.')[0]}` }  element={<BreadPage name={bread.name} imgUrl={bread.imgUrl} description={bread.description} history={bread.history} ingredients={bread.ingredients} recipe={bread.recipe} />}/>
        ))}


      </Routes>
    </HashRouter>
  </StrictMode>,
)
