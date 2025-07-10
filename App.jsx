
import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("Welcome to a Greener Future!");

  return (
    <div className="min-h-screen bg-green-50 text-green-900 font-sans p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">🌿 Green Earth Initiative</h1>
        <p className="text-lg mt-2">Promoting sustainability, one step at a time.</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-2">Recycle</h2>
          <p className="mb-4">Reduce waste by recycling materials and reducing plastic usage.</p>
          <button onClick={() => setMessage("Keep recycling for a better planet!")} className="bg-green-600 text-white px-4 py-2 rounded">Learn More</button>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-2">Plant Trees</h2>
          <p className="mb-4">Trees absorb CO₂, improve air quality, and provide habitats for wildlife.</p>
          <button onClick={() => setMessage("Every tree counts. Plant one today!")} className="bg-green-600 text-white px-4 py-2 rounded">Learn More</button>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-2">Save Energy</h2>
          <p className="mb-4">Switch to renewable energy and reduce your carbon footprint.</p>
          <button onClick={() => setMessage("Small changes make a big impact!")} className="bg-green-600 text-white px-4 py-2 rounded">Learn More</button>
        </div>
      </main>

      <footer className="text-center mt-12">
        <p className="text-xl font-medium text-green-800">{message}</p>
      </footer>
    </div>
  );
}
