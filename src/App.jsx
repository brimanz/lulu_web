import React from 'react'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import Services from './components/services/Services'
import Gallery from './components/gallery/Gallery'
import Works from './components/works/Works'

import Bg from '../public/assets/bg.jpg'

const navbarLinks = [
  {url: "#home", title: "Home"},
  {url: "#services", title: "Servicios"},
  {url: "#confection", title: "Confección"},
  {url: "#works", title: "Nuestro Trabajo"},
  {url: "#contact", title: "Contacto"}
]


function App(){
  return(
    <div  className="app">
      <Navbar 
        navbarLinks={navbarLinks}
      />

      <Header imageSrc={Bg}/>
      <Services/>
      <Gallery/>
      <Works/>
    </div>
  );
}  


export default App
