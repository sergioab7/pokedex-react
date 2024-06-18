import { Route, Routes, BrowserRouter } from "react-router-dom"
import Index from "./views/Index"
import Detalle from "./views/Detalle"
import Header from "./views/Header"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Index />} />
          <Route path='/pokemon/:id' element={<Detalle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
