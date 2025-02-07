import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import ContactPage from './pages/contactpage';
import AboutPage from './pages/aboutpage';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {


  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
