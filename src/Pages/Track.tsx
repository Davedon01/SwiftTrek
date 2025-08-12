import { useState } from 'react'
import custom from '../assets/Track-page.jpg'
// import { useNavigate } from 'react-router-dom'
import Button from '../Components/Button'

const Track = () => {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [trackingResult, setTrackingResult] = useState('')

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    if (trackingNumber.trim()) {
      setTrackingResult(`Tracking result for: ${trackingNumber}`)
    }
  }

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[64vh] flex items-center justify-center bg-fixed bg-center bg-cover text-white"
        style={{
          backgroundImage:
            `url(${custom})`,
            }}
            >
                {/* overlay */}
          <div className="absolute inset-0 bg-black opacity-60"></div>

          {/* Content */}
       <div className="relative z-10 text-center px-6 animate-fadeIn">
          <h1 className="bg-gradient-to-br from-[#ffffff] via-[#d4e8ff] to-[#4aa8ff] bg-clip-text text-transparent text-5xl font-extrabold mb-5">
            Track Your Shipment
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow">
            Enter your tracking number below to get real-time updates on your
            shipment status.
          </p>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">
              ENTER THE CONSIGNMENT NO.
            </h2>

            <form onSubmit={handleTrack} className="space-y-6">
              <div>
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter Tracking Number"
                  className="w-full px-4 py-4 border border-gray-300 rounded-md text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <Button 
              btnText='TRACK RESULT'
              btnStyle='w-full inline-block bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 text-white px-8 py-4 font-bold rounded-sm transition-all duration-300 transform hover:scale-105 hover:glow-shadow'
              />
            </form>

            {trackingResult && (
              <div className="mt-8 p-4 bg-white rounded border">
                <p className="text-gray-700">{trackingResult}</p>
              </div>
            )}

            <div className="mt-8 bg-gray-200 p-4 rounded">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Ex: 12345</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Track
