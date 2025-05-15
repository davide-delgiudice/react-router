import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Homepage from './pages/Homepage'
import ChiSiamo from './pages/ChiSiamo'
import Products from './pages/Products'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Homepage}></Route>
          <Route path='/chisiamo' Component={ChiSiamo}></Route>
          <Route path='/products' Component={Products}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App