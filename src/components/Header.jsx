import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-gray-800 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <i className="fas fa-gamepad text-2xl text-blue-500"></i>
            <h1 className="text-2xl font-bold text-white">TournamentPro</h1>
          </div>
          <div className="flex space-x-6">
            <Link 
              to="/" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isActive('/') ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <i className="fas fa-home"></i>
              <span>Home</span>
            </Link>
            <Link 
              to="/services" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isActive('/services') ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <i className="fas fa-cogs"></i>
              <span>Services</span>
            </Link>
            <Link 
              to="/contact" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isActive('/contact') ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <i className="fas fa-envelope"></i>
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
