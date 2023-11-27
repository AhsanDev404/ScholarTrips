'use client'
import React, { useState } from 'react';

const PromotionPage = () => {
  const [promotions, setPromotions] = useState([
    { id: 1, title: 'Special Student Discount', category: 'Flights', description: 'Get 20% off on all domestic flights. Limited time offer!'},
    { id: 2, title: 'Weekend Getaway Deals', category: 'Packages', description: 'Explore weekend packages starting from $199. Book now!'},
    // Add more promotions as needed
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [promotionsPerPage] = useState(6);

  // Filtering promotions based on category and search term
  const filteredPromotions = promotions.filter(promotion =>
    (selectedCategory === 'All' || promotion.category === selectedCategory) &&
    (promotion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    promotion.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Pagination logic
  const indexOfLastPromotion = currentPage * promotionsPerPage;
  const indexOfFirstPromotion = indexOfLastPromotion - promotionsPerPage;
  const currentPromotions = filteredPromotions.slice(indexOfFirstPromotion, indexOfLastPromotion);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section (You can include a header here if needed) */}
      {/* ...Header content... */}

      {/* Main Content Section */}
      <main className="container mx-auto py-8">
        {/* Search Bar */}
        <div className="mb-8 flex items-center">
          <input
            type="text"
            placeholder="Search Promotions..."
            className="p-2 border rounded mr-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="text-lg font-semibold mr-2">Filter by Category:</span>
          <select
            className="p-2 border rounded"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Flights">Flights</option>
            <option value="Packages">Packages</option>
            {/* Add more categories as needed */}
          </select>
        </div>

        {/* Promotions List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPromotions.map(promotion => (
            <div key={promotion.id} className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-2">{promotion.title}</h3>
              <p className="text-gray-700">{promotion.description}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          {Array.from({ length: Math.ceil(filteredPromotions.length / promotionsPerPage) }, (_, index) => (
            <button key={index} onClick={() => paginate(index + 1)} className="mx-2 p-2 border rounded">
              {index + 1}
            </button>
          ))}
        </div>
      </main>

      {/* Footer Section (You can include a footer here if needed) */}
      {/* ...Footer content... */}
    </div>
  );
};

export default PromotionPage;
