import React from 'react'
import { FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">UserApp</h1>

        <nav className="flex gap-6 max-[640px]:hidden">
          <a href="#" className="text-gray-700 hover:text-gray-900 transition">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition">
            Users
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition">
            Contact
          </a>
        </nav>

        <button className="block max-[640px]:block text-gray-700 text-2xl hover:text-gray-900 transition">
          <FaBars />
        </button>
      </div>
    </header>
  )
}

export default Header;

