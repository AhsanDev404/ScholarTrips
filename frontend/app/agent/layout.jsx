import React from "react";

export default function AgentLayout({ children }) {
  return (
    <div className="">
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-4">
          <h1 className="text-3xl font-semibold text-gray-800">
            Agent Dashboard
          </h1>
        </div>
      </header>
      {children}
      <footer className="bg-white py-4">
        <div className="container mx-auto text-center text-gray-600">
          <p>&copy; 2023 Agent Dashboard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
