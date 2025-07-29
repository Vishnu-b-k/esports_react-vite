import { useState } from 'react'

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    { title: "Valorant Tournament", text: "Join our weekly Valorant matches" },
    { title: "CS:GO Championship", text: "Compete in professional CS:GO games" },
    { title: "League of Legends", text: "Battle in the rift with your team" }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Esports Tournament App</h1>
      <p className="text-lg mb-8">Welcome to our tournament platform</p>
      
      <div className="max-w-2xl mx-auto mb-8">
        <div className="bg-blue-600 text-white p-8 rounded">
          <h2 className="text-2xl font-bold mb-2">{slides[currentSlide].title}</h2>
          <p className="mb-4">{slides[currentSlide].text}</p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={prevSlide}
              className="bg-blue-800 px-4 py-2 rounded hover:bg-blue-900"
            >
              Previous
            </button>
            <button 
              onClick={nextSlide}
              className="bg-blue-800 px-4 py-2 rounded hover:bg-blue-900"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Tournaments</h3>
          <p>Join exciting tournaments</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Teams</h3>
          <p>Create and manage teams</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Prizes</h3>
          <p>Win amazing prizes</p>
        </div>
      </div>
    </div>
  )
}

export default Home
