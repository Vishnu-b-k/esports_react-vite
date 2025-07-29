function Services() {
  const services = [
    "Tournament Organization",
    "Team Registration", 
    "Match Scheduling",
    "Prize Distribution"
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
      <div className="max-w-2xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-4 rounded shadow mb-4">
            <h3 className="text-xl font-semibold">{service}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
