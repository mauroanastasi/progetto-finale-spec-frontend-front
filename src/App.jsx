import { BrowserRouter, Route, Routes } from 'react-router-dom'
import VideogamesList from '../components/VideogamesList'
import VideogamesDetails from '../components/VideogamesDetails'
import { FetchProvider } from '../context/GlobalContext'
import VideogamesItem from '../components/VideogamesItem'


function App() {

  return (
    <>
      <FetchProvider>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path='/' element={<VideogamesList />} ></Route>
              <Route path='/item' element={<VideogamesItem />} ></Route>
              <Route path='/details/:id' element={<VideogamesDetails />} ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </FetchProvider>
    </>
  )
}

export default App
