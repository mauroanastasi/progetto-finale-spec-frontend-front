import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import VideogamesList from '../components/VideogamesList'
import VideogamesDetails from '../components/VideogamesDetails'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<VideogamesList />} ></Route>
            <Route path='/details/:Id' element={<VideogamesDetails />} ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
