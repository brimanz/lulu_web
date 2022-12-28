import React from 'react'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'

import Bg from '.././public/assets/bg.jpg'


function App(){
  return(
    <div  className="app">
      <Navbar/>
      <Header imageSrc={Bg}/>
    </div>
  );
}  


export default App
