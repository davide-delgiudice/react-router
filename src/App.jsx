import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Homepage from './pages/Homepage'
import ChiSiamo from './pages/ChiSiamo'
import Products from './pages/products/Products'
import DefaultLayout from './layouts/DefaultLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={Homepage}></Route>
            <Route path='/chisiamo' Component={ChiSiamo}></Route>
            <Route path='/products'>
              <Route index Component={Products} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App