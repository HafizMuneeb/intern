import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactUs from './components/ContactUs'
import Home from './components/Home'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/contact-us" element={<ContactUs />}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
