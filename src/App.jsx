import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Homepage from './pages/Homepage'
import ChiSiamo from './pages/ChiSiamo'
import Actors from './pages/Actors'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Homepage}></Route>
          <Route path='/chisiamo' Component={ChiSiamo}></Route>
          <Route path='/actors' Component={Actors}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App