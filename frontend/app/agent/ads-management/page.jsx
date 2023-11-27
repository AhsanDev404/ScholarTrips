'use client'
import React, { useState } from 'react';

const initialAds = [
  { id: 1, name: 'Ad 1', description: 'Description for Ad 1', status: 'Active' },
  { id: 2, name: 'Ad 2', description: 'Description for Ad 2', status: 'Inactive' },
  // ...more initial ads
];

const AddManagementPage = () => {
  const [ads, setAds] = useState(initialAds);
  const [newAdName, setNewAdName] = useState('');
  const [newAdDescription, setNewAdDescription] = useState('');

  const handleStatusChange = (id) => {
    // Logic to change the status of the ad with the given id (e.g., toggle between 'Active' and 'Inactive')
    setAds((prevAds) =>
      prevAds.map((ad) =>
        ad.id === id ? { ...ad, status: ad.status === 'Active' ? 'Inactive' : 'Active' } : ad
      )
    );
  };

  const handleEditAd = (id) => {
    // Logic to edit the ad with the given id (redirect to edit page or show a modal, etc.)
    console.log(`Edit Ad with ID: ${id}`);
  };

  const handleNewAdSubmit = (e) => {
    e.preventDefault();
    // Logic to add a new ad to the ads list
    const newAd = {
      id: ads.length + 1,
      name: newAdName,
      description: newAdDescription,
      status: 'Active', // New ads are set to 'Active' by default
    };
    setAds([...ads, newAd]);
    // Clear form fields
    setNewAdName('');
    setNewAdDescription('');
  };

  return (
    <div className="  flex justify-center items-center  bg-gray-100">
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
          Create New Ad
        </button>
      </div>
      {/* Add/Edit Ad Form */}
      {newAdName !== '' && newAdDescription !== '' && (
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4">Create New Ad</h2>
          <form onSubmit={handleNewAdSubmit}>
            <div className="mb-4">
              <label htmlFor="newAdName" className="block text-sm font-medium text-gray-600">
                Ad Name
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
                Ad Description
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
              Create Ad
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddManagementPage;
