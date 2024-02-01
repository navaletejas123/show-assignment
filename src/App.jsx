import React from 'react'
import Show from './components/Show'
import { Route, Routes } from 'react-router-dom'
import Details from './components/Details'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Show />} />
        <Route path='/details' element={<Details/>} />
      </Routes>
    </div>
  )
}

export default App
