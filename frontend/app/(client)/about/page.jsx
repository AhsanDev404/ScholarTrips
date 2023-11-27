import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section (You can include a header here if needed) */}
      {/* ...Header content... */}

      {/* Main Content Section */}
      <main className="container mx-auto py-8">
        {/* About Section */}
        <section className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-700">
            Welcome to our Student Travel Hub! We are passionate about providing affordable travel solutions exclusively for students. Our mission is to make travel accessible, budget-friendly, and exciting for students from all walks of life.
          </p>
        </section>

        {/* Our Vision Section */}
        <section className="bg-white p-8 rounded shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-700">
            We envision a world where every student can explore the wonders of the world without breaking the bank. By offering exclusive discounts, transparent pricing, and personalized travel options, we strive to empower students to broaden their horizons and create unforgettable memories.
          </p>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-white p-8 rounded shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Exclusive Student Discounts on Flights and Packages</li>
            <li>Transparent Pricing with No Hidden Fees</li>
            <li>Personalized Travel Solutions Tailored for Students</li>
            <li>Easy Search and Booking Process</li>
            <li>Dedicated Customer Support for Student Travel Needs</li>
          </ul>
        </section>

        {/* Meet the Team Section */}
        <section className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Team Member Cards */}
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-700">Founder & CEO</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-700">Head of Operations</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-2">Alex Johnson</h3>
              <p className="text-gray-700">Lead Developer</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section (You can include a footer here if needed) */}
      {/* ...Footer content... */}
    </div>
  );
};

export default AboutPage;
