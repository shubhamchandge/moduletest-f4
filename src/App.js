import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Searchpage from './Components/Searchpage/Searchpage'
import Weatherpage from "./Components/Weatherpage/Weatherpage"
import { PATHS } from './path'




const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Searchpage/>}  />
        <Route path="/weather/:cityname" element={<Weatherpage/>} />
      </Routes>
    </div>
  )
}

export default App