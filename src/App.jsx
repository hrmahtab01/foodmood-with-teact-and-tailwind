import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Food from './components/Food'
import Outlets from './components/Outlets'
import Delivery from './components/Delivery'
import Team from './components/Team'
import Discount from './components/Discount'
import Footer from './components/Footer'
import { useState } from 'react'

const App = () => {

  

  
  return (
    <>
     <Navbar/>
      <Food/>
      <Outlets/>
      <Delivery/>
      <Team/>
      <Discount/>
      <Footer/>
     
  
    </>
  )
}

export default App
