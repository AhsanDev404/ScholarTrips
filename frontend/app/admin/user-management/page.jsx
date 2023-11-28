"use client";
import { initialUsers } from "@/utils/constant";
import React, { useState } from "react";

const NewUserModal = ({ isOpen, onClose, onSubmit }) => {
  const [newUserName, setNewUserName] = useState('');
  const [newUserDescription, setNewUserDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newUserName, newUserDescription);
    setNewUserName('');
    setNewUserDescription('');
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Create New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-600"
            >
              User Name
            </label>
            <input
              type="text"
              id="userName"
              className="mt-1 p-2 w-full border rounded-md"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="userDescription"
              className="block text-sm font-medium text-gray-600"
            >
              User Description
            </label>
            <textarea
              id="userDescription"
              className="mt-1 p-2 w-full border rounded-md"
              value={newUserDescription}
              onChange={(e) => setNewUserDescription(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white p-2 rounded w-full"
          >
            Create User
          </button>
        </form>
      </div>
    </div>
  );
};

const UserManagementPage = () => {
  const [users, setUsers] = useState([...initialUsers]); // State for users
  const [newUserName, setNewUserName] = useState(''); // State for new user name
  const [newUserDescription, setNewUserDescription] = useState(''); // State for new user description
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const handleStatusChange = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' } : user
      )
    );
  };

  const handleEditUser = (id) => {
    console.log(`Edit User with ID: ${id}`);
    // Logic to edit the user with the given ID (redirect to edit page or show a modal, etc.)
  };

  const handleNewUserSubmit = (name, description) => {
    const newUser = {
      id: users.length + 1,
      name,
      description,
      status: 'Active', // New users are set to 'Active' by default
    };
    setUsers([...users, newUser]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md my-10 mb-8 w-full">
        <h2 className="text-2xl font-bold mb-4">User Management</h2>
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
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border p-2">{user.id}</td>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.description}</td>
                <td className="border p-2">{user.status}</td>
                <td className="border p-2 flex justify-around">
                  <button onClick={() => handleStatusChange(user.id)}>
                    {user.status === "Active" ? "Deactivate" : "Activate"}
                  </button>
                  <button onClick={() => handleEditUser(user.id)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-black text-white p-2 rounded w-full"
        >
          Create New User
        </button>
      </div>
      <NewUserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleNewUserSubmit}
      />  
    </div>
  );
};

export default UserManagementPage;
