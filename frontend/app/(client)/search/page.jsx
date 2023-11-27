"use client";
import React, { useState } from "react";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Simulate a search function or fetch data based on the search query
    // Replace this with your actual search logic
    const searchData = [
      { title: "Result 1", description: "Description for Result 1" },
      { title: "Result 2", description: "Description for Result 2" },
      // Add more search results here
    ];

    setSearchResults(searchData);
  };

  return (
    <div className="bg-gray-100">
      <div className="min-h-screen flex items-center justify-center ">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4">Search</h2>
          <div className="mb-4">
            <input
              type="text"
              className="p-2 w-full border rounded-md"
              placeholder="Enter your search query"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </div>
      <div className="mt-4 flex gap-5 flex-wrap">
        {searchResults.length > 0 ? (
          searchResults.map((result, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded my-2">
              <h3 className="text-xl font-semibold">{result.title}</h3>
              <p className="text-gray-600">{result.description}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No search results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
