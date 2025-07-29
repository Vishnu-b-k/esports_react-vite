import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen">
        <nav className="bg-blue-600 text-white p-4">
          <div className="flex space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/services" className="hover:underline">Services</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </nav>
        
        <div className="p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
