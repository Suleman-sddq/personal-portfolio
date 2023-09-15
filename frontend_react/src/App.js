import React from 'react'
import './App.scss'

import { Header, Footer, Skills, Testimonial, Work, About } from './containers'
import { Navbar } from './components'

const App = () => {
   return (
      <div className='app'>
         <Navbar />
         <Header />
         <About />
         <Work />
         <Skills />
         <Testimonial />
         <Footer />
      </div>
   )
}

export default App