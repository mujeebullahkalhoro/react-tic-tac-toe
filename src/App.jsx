import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './Components/Board';
import Header from './Components/Header';
import ScoreBorad from './Components/ScoreBoard';
function App() {
  

  return (
    <div className="app">
      <Header />

      <ScoreBorad />

      <Board />
      

    </div>
 
  )
}

export default App
