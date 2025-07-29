import { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  if (submitted) {
    return (
      <div className="max-w-md mx-auto bg-green-100 p-8 rounded">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Thank You!</h2>
        <p>Your message has been sent successfully.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded h-24"
            required
          />
        </div>
        
        <button 
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactForm
