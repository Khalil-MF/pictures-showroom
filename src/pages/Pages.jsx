import React from 'react';
import Home from './Home';
import Searched from './Searched';
import Picture from './Picture';
import { Route,Routes, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Showroom from './Showroom';

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter  >
    <Routes location={location} key={location.pathname} >
        <Route path='/' element={<Home/>} />
        <Route path='/category/:type' element={<Showroom/>} />
        <Route path='/searched/:search' element={<Searched/>} /> 
        <Route path='/pic/:detail' element={<Picture/>} />
    </Routes>
    </AnimatePresence>
  )
}

export default Pages; 