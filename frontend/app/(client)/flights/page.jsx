'use client'
import { flightsConst } from '@/utils/constant';
import React, { useState } from 'react';

const FlightsPage = () => {
  // Sample flight data (you can replace this with actual flight data from an API)
  const [flights, setFlights] = useState([...flightsConst]);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('price'); // Default sorting by price
  const [pageNumber, setPageNumber] = useState(1);
  const flightsPerPage = 6; // Number of flights to display per page
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Rest of your code...

  const handleBookNow = () => {
    setShowConfirmation(true);
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
  };
  // Filtering flights based on search term
  const filteredFlights = flights.filter(flight =>
    flight.airline.toLowerCase().includes(searchTerm.toLowerCase()) ||
    flight.departure.toLowerCase().includes(searchTerm.toLowerCase()) ||
    flight.arrival.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorting flights based on selected option
  const sortedFlights = filteredFlights.sort((a, b) => {
    if (sortBy === 'price') {
      return parseInt(a.price.slice(1)) - parseInt(b.price.slice(1));
    } else if (sortBy === 'departureTime') {
      return new Date('1970/01/01 ' + a.departureTime) - new Date('1970/01/01 ' + b.departureTime);
    }
    // Add more sorting options as needed
    return 0;
  });

  // Pagination logic
  const startIndex = (pageNumber - 1) * flightsPerPage;
  const displayedFlights = sortedFlights.slice(startIndex, startIndex + flightsPerPage);

  return (
    <div className="min-h-screen bg-gray-100 lg:p-10 p-5">
      {/* Header Section (You can include a header here if needed) */}
      {/* ...Header content... */}

      {/* Main Content Section */}
      <main className="container mx-auto py-8">
        {/* Search and Filter Section */}
        <div className="mb-6 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search by airline, departure, or arrival"
            className="p-2 border rounded w-1/3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex space-x-4">
            <label>
              Sort by:
              <select
                className="p-2 border rounded"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="price">Price</option>
                <option value="departureTime">Departure Time</option>
                {/* Add more sorting options as needed */}
              </select>
            </label>
            {/* Add additional filter options if necessary */}
          </div>
        </div>

        {/* Flight List Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedFlights.map(flight => (
            <div key={flight.id} className="bg-white p-6 rounded shadow-md">
              <h2 className="text-xl font-semibold mb-2">{flight.airline}</h2>
              <p className="text-gray-700">Departure: {flight.departure} - Arrival: {flight.arrival}</p>
              <p className="text-gray-700">Departure Time: {flight.departureTime} - Arrival Time: {flight.arrivalTime}</p>
              <p className="text-green-500 font-semibold mt-2">{flight.price}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700 transition duration-300"
                onClick={handleBookNow} // Call handleBookNow when the button is clicked
              >
                Book Now
              </button>
            </div>
          ))}
        </section>

        {/* Pagination Section */}
        <div className="mt-8 flex justify-center">
          {Array.from({ length: Math.ceil(sortedFlights.length / flightsPerPage) }, (_, index) => (
            <button
              key={index}
              className={`mx-2 p-2 rounded ${pageNumber === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
              onClick={() => setPageNumber(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </main>

      {showConfirmation && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-md">
            <p className="text-xl font-semibold mb-4">Booking Confirmation</p>
            <p>Your booking has been confirmed!</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700 transition duration-300"
              onClick={handleConfirmationClose} // Call handleConfirmationClose to close the modal
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightsPage;
