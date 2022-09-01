import React , {useContext}from 'react'
import Home from './Home'
import Login from './Login'
import Posts from './Posts'
import Navbar from './Navbar'
import './App.css'
import { Routes, Route } from "react-router-dom";
import { context } from './Context/context.js';

const App = () => {

    return(
        <>
    <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/Login' element={<Login/>}/> 
      <Route path='/Posts' element={<Posts/>}/>
      </Routes>
        </>
    )
}

export default App;
