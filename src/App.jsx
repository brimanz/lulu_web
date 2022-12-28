import React from 'react'
import Header from './components/header/Header'

import Bg from '.././public/assets/bg.jpg'


function App(){
  return(
    <div  className="app">
      <Header imageSrc={Bg}/>
    </div>
  );
}  


export default App
