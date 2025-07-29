function Home() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Esports Tournament App</h1>
      <p className="text-lg mb-8">Welcome to our tournament platform</p>
      
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
