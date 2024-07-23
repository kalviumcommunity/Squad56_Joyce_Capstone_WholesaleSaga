import React from 'react'
import './App.css'
import axios from 'axios';
import Item from './FOOD/Item'
import Mutton from './FOOD/Mutton';
import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import Home from './Pages/Home';
import Party from './FOOD/Party';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Item' element={<Item/>}></Route>
        <Route path='/Mutton' element={<Mutton/>}></Route>
        <Route path='/Party' element={<Party/>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
