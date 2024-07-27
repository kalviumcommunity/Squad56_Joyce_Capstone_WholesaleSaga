import React from 'react'
import './App.css'
import axios from 'axios';
import Item from './FOOD/Item'
import Mutton from './FOOD/Mutton';
import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import Home from './Pages/Home';
import Party from './FOOD/Party';
import Offer from './FOOD/Offer';
import Seafood from './FOOD/Seafood';
import Ready from './FOOD/Ready';
import Snack from './FOOD/Snack';
import Cold from "./FOOD/Cold";
import Egg from "./FOOD/Egg";
import Pickel from "./FOOD/Pickel";
import Spice from './FOOD/Spice';
import Dryfish from './FOOD/Dryfish';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Item' element={<Item/>}></Route>
        <Route path='/Mutton' element={<Mutton/>}></Route>
        <Route path='/Party' element={<Party/>}></Route>
        <Route path='/Offer' element={<Offer/>}></Route>
        <Route path='/Seafood' element={<Seafood/>}></Route>
        <Route path='/Ready' element={<Ready/>}></Route>
        <Route path='/Snack' element={<Snack/>}></Route>
        <Route path='/Cold' element={<Cold/>}></Route>
        <Route path='/Egg' element={<Egg/>}></Route>
        <Route path='/Pickel' element={<Pickel/>}></Route>
        <Route path='/Spice' element={<Spice/>}></Route>
        <Route path='/Dryfish' element={<Dryfish/>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
