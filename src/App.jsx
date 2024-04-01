import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Button from './components/Button'
import Card from './components/Card'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ImageWithText from './components/ImageWithText'
import ImageWithTextOne from './components/ImageWithTextOne'
import ImageWithTextThree from './components/ImageWithTextThree'
import ImageWithTextTwo from './components/ImageWithTextTwo'
import Navbar from './components/Navbar'
import Offer from './components/Offer'
import RandomNumberComponent from './components/RandomNumberComponent'
import ContactUs from './components/ContactUs'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/contact-us" element={<ContactUs />}/>
      </Routes>
    </BrowserRouter>
      <Navbar />
      <Hero />
      <Card />
      <ImageWithText
        imageUrl="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-3-img.jpg"
        altText="Example Image"
        title="Branding Nice Studio"
        description="The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can."
      />
      <ImageWithTextOne 
        imageUrl="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-2-img.jpg"
        altText="Example Image"
        title="Mobile Card App"
        description="The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can."
      />
      <ImageWithTextTwo
        imageUrl="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-3-img.jpg"
        altText="Example Image"
        title="Restaurant Landing Page"
        description="The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can."
      />
      <Button />
      <ImageWithTextThree 
        imageUrl="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/07/testi21.png"
        altText="Example Image"
        title="The quick, brown fox jumps over a lazy dog."
      />
      <RandomNumberComponent />
      <Offer />
      <Footer />
    </>
  )
}

export default App
