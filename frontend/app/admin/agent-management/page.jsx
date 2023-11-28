"use client";
import { initialAgents } from "@/utils/constant";
import React, { useState } from "react";

const NewAgentModal = ({ isOpen, onClose, onSubmit }) => {
  const [newAgentName, setNewAgentName] = useState("");
  const [newAgentDescription, setNewAgentDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newAgentName, newAgentDescription);
    setNewAgentName("");
    setNewAgentDescription("");
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Create New Agent</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="agentName"
              className="block text-sm font-medium text-gray-600"
            >
              Agent Name
            </label>
            <input
              type="text"
              id="agentName"
              className="mt-1 p-2 w-full border rounded-md"
              value={newAgentName}
              onChange={(e) => setNewAgentName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="agentDescription"
              className="block text-sm font-medium text-gray-600"
            >
              Agent Description
            </label>
            <textarea
              id="agentDescription"
              className="mt-1 p-2 w-full border rounded-md"
              value={newAgentDescription}
              onChange={(e) => setNewAgentDescription(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white p-2 rounded w-full"
          >
            Create Agent
          </button>
        </form>
      </div>
    </div>
  );
};

const AgentManagementPage = () => {
  const [agents, setAgents] = useState(initialAgents);
  const [newAgentName, setNewAgentName] = useState("");
  const [newAgentDescription, setNewAgentDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStatusChange = (id) => {
    setAgents((prevAgents) =>
      prevAgents.map((agent) =>
        agent.id === id
          ? {
              ...agent,
              status: agent.status === "Active" ? "Inactive" : "Active",
            }
          : agent
      )
    );
  };

  const handleEditAgent = (id) => {
    console.log(`Edit Agent with ID: ${id}`);
    // Logic to edit the agent with the given ID (redirect to edit page or show a modal, etc.)
  };

  const handleNewAgentSubmit = (name, description) => {
    const newAgent = {
      id: agents.length + 1,
      name,
      description,
      status: "Active", // New agents are set to 'Active' by default
    };
    setAgents([...agents, newAgent]);
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
            {agents.map((ad) => (
              <tr key={ad.id}>
                <td className="border p-2">{ad.id}</td>
                <td className="border p-2">{ad.name}</td>
                <td className="border p-2">{ad.description}</td>
                <td className="border p-2">{ad.status}</td>
                <td className="border p-2 flex justify-around">
                  <button onClick={() => handleStatusChange(ad.id)}>
                    {ad.status === "Active" ? "Deactivate" : "Activate"}
                  </button>
                  <button onClick={() => handleEditAd(ad.id)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={() => handleEditAd(null)}
          className="bg-black text-white p-2 rounded w-full"
        >
          Create New Agent
        </button>
      </div>
     

      <NewAgentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleNewAgentSubmit}
      />
    </div>
  );
};

export default AgentManagementPage;
