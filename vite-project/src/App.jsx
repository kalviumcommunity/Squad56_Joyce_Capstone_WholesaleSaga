import React from 'react'
import './App.css'
import axios from 'axios';
import Item from './FOOD/Item'
import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import Home from './Pages/Home';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Item' element={<Item/>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
