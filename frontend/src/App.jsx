import { useState } from 'react'
import NavBar from '../src/components/nav/nav'
import './App.css'
import Title from './components/title/title';
function App() {


  return (

    <div className='container'>

      <NavBar></NavBar>
      <div className="Title-descrip">
        <Title title="Главный заголовок" subtitle="Описание под заголовком" />
      </div>

      <div className="Title-descrip">
        <Title title="Главный заголовок" subtitle="Описание под заголовком" />
      </div>
      
    </div>
  )
}

export default App
