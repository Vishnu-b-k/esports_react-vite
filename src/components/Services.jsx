import { useState } from 'react'

function Services() {
  const [showModal, setShowModal] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  const services = [
    "Tournament Organization",
    "Team Registration", 
    "Match Scheduling",
    "Prize Distribution"
  ]

  const openModal = (service) => {
    setSelectedService(service)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedService('')
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
      <div className="max-w-2xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-4 rounded shadow mb-4">
            <h3 className="text-xl font-semibold mb-2">{service}</h3>
            <button 
              onClick={() => openModal(service)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded max-w-md mx-4">
            <h2 className="text-2xl font-bold mb-4">{selectedService}</h2>
            <p className="mb-4">
              This is more information about {selectedService}. 
              We provide professional services to help you succeed.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Close
              </button>
              <button 
                onClick={closeModal}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Services
