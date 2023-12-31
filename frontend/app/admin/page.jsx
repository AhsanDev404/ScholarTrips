import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Page heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>

        {/* Content sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: Total Users */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Total Users</h2>
            <p className="text-gray-700 text-lg">500</p>
          </div>

          {/* Card 2: Total Orders */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Total Orders</h2>
            <p className="text-gray-700 text-lg">1200</p>
          </div>

          {/* Card 3: Revenue */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Revenue</h2>
            <p className="text-gray-700 text-lg">$50,000</p>
          </div>

          {/* Card 4: Latest Users */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Latest Users</h2>
            <ul className="text-gray-700">
              <li>User 1</li>
              <li>User 2</li>
              <li>User 3</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
