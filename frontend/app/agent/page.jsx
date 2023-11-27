import React from 'react';

const AgentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      

      {/* Main Content Section */}
      <main className="container mx-auto py-8">
        {/* Statistics Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Statistics</h2>
          {/* Add your statistics components here */}
        </section>

        {/* Recent Activities Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
          {/* Add your recent activities components here */}
        </section>

        {/* Quick Access Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1: Manage Ads */}
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">Manage Ads</h3>
            <p className="text-gray-700">View, edit, and create new ads for your clients.</p>
            {/* Add link/button to navigate to the ads management page */}
          </div>

          {/* Feature 2: Reports */}
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">Reports</h3>
            <p className="text-gray-700">Access performance reports and analytics.</p>
            {/* Add link/button to navigate to the reports page */}
          </div>

          {/* Feature 3: Support */}
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <p className="text-gray-700">Get assistance from our support team.</p>
            {/* Add link/button to contact support */}
          </div>
        </section>
      </main>

      {/* Footer Section */}
      
    </div>
  );
};

export default AgentDashboard;
