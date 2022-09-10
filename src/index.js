import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { Home } from './pages/home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Details } from './pages/details';
import { Acao } from './pages/Acao';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/details/:id" element={<Details/>}/>
    <Route path="/acao" element={<Acao/>}/>
  </Routes>
  </BrowserRouter>
);
