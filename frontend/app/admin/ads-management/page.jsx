'use client'
import { initialAdds } from '@/utils/constant';
import React, { useState } from 'react';

const NewAdModal = ({ isOpen, onClose, onSubmit }) => {
  const [newAdName, setNewAdName] = useState('');
  const [newAdDescription, setNewAdDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newAdName, newAdDescription);
    setNewAdName('');
    setNewAdDescription('');
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Create New Ad</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="adName" className="block text-sm font-medium text-gray-600">
              Ad Name
            </label>
            <input
              type="text"
              id="adName"
              className="mt-1 p-2 w-full border rounded-md"
              value={newAdName}
              onChange={(e) => setNewAdName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="adDescription" className="block text-sm font-medium text-gray-600">
              Ad Description
            </label>
            <textarea
              id="adDescription"
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
    </div>
  );
};



const AddManagementPage = () => {
  const [ads, setAds] = useState(initialAdds);
  const [newAdName, setNewAdName] = useState('');
  const [newAdDescription, setNewAdDescription] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewAdSubmit = (name, description) => {
    const newAd = {
      id: ads.length + 1,
      name,
      description,
      status: 'Active',
    };
    setAds([...ads, newAd]);
  };


  const handleEditAd = (id) => {
    // Logic to edit the ad with the given id (redirect to edit page or show a modal, etc.)
    console.log(`Edit Ad with ID: ${id}`);
  };

  

  return (
    <div className="min-h-screen  flex justify-center items-center  bg-gray-100">
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
        <button onClick={() => setIsModalOpen(true)} className="bg-black text-white p-2 rounded w-full">
        Create New Ad
      </button>
      <NewAdModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleNewAdSubmit}
      />
      </div>
      {/* Add/Edit Ad Form */}
      
     
    </div>
  );
};

export default AddManagementPage;
