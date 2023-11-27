import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex items-center mb-4">
          <h1 className="text-2xl font-bold mr-2">Uni Travelers Hub</h1>
          <span className="text-gray-500">Connecting you with the world</span>
        </div>
        <div className="flex space-x-4 mb-4">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>
        <div className="text-sm text-gray-500 mb-4">
          <p>&copy; 2023 Your Website Name. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
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
      </div>
    </footer>
  );
};

export default Footer;
