import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactUs from './components/ContactUs'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/contact-us" element={<ContactUs />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
