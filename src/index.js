import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import App from './App';
import { Favoritos } from './components/Favoritos';
import {LandingPage} from './components/LandingPage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element = {<App />}>
        <Route path="/" element = {<LandingPage/>}/>
        <Route path ="/favoritos" element = {<Favoritos/>}/>
    </Route>

  </Routes>
  </BrowserRouter>
  
);

