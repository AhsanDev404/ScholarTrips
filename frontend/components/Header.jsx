"use client";
import React, { useState } from "react";
import { FaBars, FaSearch, FaTimes, FaUser } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-100 border-b shadow-lg p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold hover:text-gray-100">
          YourLogo
        </Link>

        {/* Navigation Links (Hidden on smaller screens) */}
        <nav className="hidden lg:flex space-x-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/flights" className="hover:text-gray-300">
            Flights
          </Link>
          <Link href="/promotion" className="hover:text-gray-300">
            Promotions
          </Link>
          <Link href="/about" className="hover:text-gray-300">
           About us
          </Link>
          <Link href="/FAQ" className="hover:text-gray-300">
           FAQ
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
           Contact Us
          </Link>
          {/* Add more navigation links as needed */}
        </nav>

        <div className="hidden lg:flex space-x-4">
          <Link href={'/search'} className="bg-white p-3 rounded-full flex justify-center items-center">
            <FaSearch className="" />
          </Link>
          <Link href={'/profile'} className="bg-white  border py-2 px-3 rounded-full flex justify-center items-center">
          <FaUser />
          </Link>
          <Link href={'/auth'} className="bg-white  border py-2 px-3 rounded-full flex justify-center items-center">
            login
          </Link>
        </div>

        <div className="lg:hidden flex gap-2">
        <Link href={'/search'} className="bg-white p-3 rounded-full flex justify-center items-center">
            <FaSearch className="" />
          </Link>
          <Link href={'/profile'} className="bg-white  border py-2 px-3 rounded-full flex justify-center items-center">
          <FaUser />
          </Link>
          <Link href={'/auth'} className="bg-white  border py-2 px-3 rounded-full flex justify-center items-center">
            login
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" focus:outline-none"
          >
            <FaBars className="h-6 w-6" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-gray-200 bg-opacity-90">
          <div className="flex flex-col items-center pt-16">
            <div className="flex justify-end w-full px-4">
              <button
                onClick={() => setIsOpen(false)}
                className=" text-3xl focus:outline-none"
              >
                <FaTimes />
              </button>
            </div>
            <Link
              href="/"
              className="text-3xl font-bold mb-8 hover:text-gray-100"
            >
              YourLogo
            </Link>
            <nav className="flex flex-col items-center space-y-4">
            <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/flights" className="hover:text-gray-300">
            Flights
          </Link>
          <Link href="/promotions" className="hover:text-gray-300">
            Promotions
          </Link>
          <Link href="/promotions" className="hover:text-gray-300">
           About us
          </Link>
          <Link href="/promotions" className="hover:text-gray-300">
           FAQ
          </Link>
          <Link href="/promotions" className="hover:text-gray-300">
           Contact Us
          </Link>
              {/* Add more navigation links as needed */}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
