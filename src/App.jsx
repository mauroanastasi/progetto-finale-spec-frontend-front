import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import VideogamesList from '../components/VideogamesList'
import VideogamesDetails from '../components/VideogamesDetails'
import { FetchProvider } from '../context/GlobalContext'


function App() {

  return (
    <>
      <FetchProvider>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path='/' element={<VideogamesList />} ></Route>
              <Route path='/details/:Id' element={<VideogamesDetails />} ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </FetchProvider>
    </>
  )
}

export default App
