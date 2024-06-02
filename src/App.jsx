import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Food from './components/Food'
import Outlets from './components/Outlets'
import Delivery from './components/Delivery'
import Team from './components/Team'
import Discount from './components/Discount'
import Footer from './components/Footer'


const App = () => {


  let toggleTheme = ()=>{ 
    document.documentElement.classList.toggle("dark");
  }
  return (
    <>
    <button onClick={toggleTheme} className='p-[10px] rounded-full bg-blue-300 dark:bg-teal-500 text-[30px] text-black dark:text-white fixed right-[20px] bottom-[20px]'>change theme</button>
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
