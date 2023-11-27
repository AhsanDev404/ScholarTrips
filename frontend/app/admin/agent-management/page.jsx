'use client'
import React, { useState } from 'react';

const initialAds = [
  { id: 1, name: 'Agent 1', description: 'Description for Agent 1', status: 'Active' },
  { id: 2, name: 'Agent2', description: 'Description for Agent 2', status: 'Inactive' },
  // ...more initial ads
];

const AgentManagementPage = () => {
  const [ads, setAds] = useState(initialAds);
  const [newAdName, setNewAdName] = useState('');
  const [newAdDescription, setNewAdDescription] = useState('');

  const handleStatusChange = (id) => {
    setAds((prevAds) =>
      prevAds.map((ad) =>
        ad.id === id ? { ...ad, status: ad.status === 'Active' ? 'Inactive' : 'Active' } : ad
      )
    );
  };

  const handleEditAd = (id) => {
    console.log(`Edit Ad with ID: ${id}`);
    // Logic to edit the ad with the given ID (redirect to edit page or show a modal, etc.)
  };

  const handleNewAdSubmit = (e) => {
    e.preventDefault();
    const newAd = {
      id: ads.length + 1,
      name: newAdName,
      description: newAdDescription,
      status: 'Active', // New ads are set to 'Active' by default
    };
    setAds([...ads, newAd]);
    setNewAdName('');
    setNewAdDescription('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md my-10 mb-8 w-full">
        <h2 className="text-2xl font-bold mb-4">Ads Management</h2>
        <table className="w-full mb-4">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ads.map((ad) => (
              <tr key={ad.id}>
                <td className="border p-2">{ad.id}</td>
                <td className="border p-2">{ad.name}</td>
                <td className="border p-2">{ad.description}</td>
                <td className="border p-2">{ad.status}</td>
                <td className="border p-2 flex justify-around">
                  <button onClick={() => handleStatusChange(ad.id)}>
                    {ad.status === 'Active' ? 'Deactivate' : 'Activate'}
                  </button>
                  <button onClick={() => handleEditAd(ad.id)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => handleEditAd(null)} className="bg-black text-white p-2 rounded w-full">
          Create New Agent
        </button>
      </div>
      {/* Add/Edit Ad Form */}
      {newAdName !== '' && newAdDescription !== '' && (
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4">Create New Ad</h2>
          <form onSubmit={handleNewAdSubmit}>
            <div className="mb-4">
              <label htmlFor="newAdName" className="block text-sm font-medium text-gray-600">
              Agent Name
              </label>
              <input
                type="text"
                id="newAdName"
                className="mt-1 p-2 w-full border rounded-md"
                value={newAdName}
                onChange={(e) => setNewAdName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="newAdDescription" className="block text-sm font-medium text-gray-600">
              Agent Description
              </label>
              <textarea
                id="newAdDescription"
                className="mt-1 p-2 w-full border rounded-md"
                value={newAdDescription}
                onChange={(e) => setNewAdDescription(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="bg-black text-white p-2 rounded w-full">
              Create Agent
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AgentManagementPage;
