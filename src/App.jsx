import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SearchArea from './components/SearchArea'
import TeroristsArea from './components/TeroristsArea'


function App() {

  return (
    <>
      <main>
        <Header/>
        
        <TeroristsArea/>
      </main>
    </>
  )
}

export default App
