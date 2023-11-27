import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
     

      {/* Main Content Section */}
      <main className="container mx-auto py-8">
        {/* Feature Section */}
        <section className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Find the Best Student Travel Deals</h2>
          <p className="text-lg text-gray-700">
            Explore affordable flight options tailored for students. We provide departure and arrival times, complete costs including taxes and fees, and detailed luggage allowances to ensure you make an informed decision.
          </p>
        </section>

        {/* Departure and Arrival Time Section */}
        <section className="bg-white p-8 rounded shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Departure and Arrival Time</h2>
          <p className="text-gray-700">
            Find flights based on your preferred travel times. Whether you're an early bird or a night owl, we have options to suit your schedule. Make the most of your time at the destination.
          </p>
        </section>

        {/* Complete Cost (Including Taxes and Fees) Section */}
        <section className="bg-white p-8 rounded shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Complete Cost (Including Taxes and Fees)</h2>
          <p className="text-gray-700">
            Know the total cost upfront, including all taxes and fees. Budget-conscious students can plan their trip without unexpected expenses. We provide transparent pricing to help you make informed decisions.
          </p>
        </section>

        {/* Luggage Allowance and Fees Section */}
        <section className="bg-white p-8 rounded shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Luggage Allowance and Fees</h2>
          <p className="text-gray-700">
            Understand luggage policies to avoid extra charges. Different airlines have varying baggage allowances and fees. We provide detailed information on carry-on size, weight restrictions, and potential costs of excess baggage.
          </p>
        </section>

        {/* Functionalities Section */}
        <section className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Website Functionalities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Students Functionality */}
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-2">For Students</h3>
              <p className="text-gray-700">
                Search and filter flight deals based on your preferences. Create user profiles to save your searches and favorite deals for quick access.
              </p>
            </div>

            {/* Promoters Functionality */}
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-2">For Promoters</h3>
              <p className="text-gray-700">
                Submit and manage advertisements for travel deals. Access analytics to evaluate the effectiveness of your promotions.
              </p>
            </div>

            {/* Moderators Functionality */}
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-2">For Moderators</h3>
              <p className="text-gray-700">
                Review and approve/reject submitted ads. Provide feedback and comments to advertisers. Ensure high-quality and accurate advertisements on the website.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <p>&copy; 2023 Student Travel Deals. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
