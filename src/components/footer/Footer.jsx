import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-white text-gray-700 border-t border-gray-200 pt-12">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-12">
          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">UserApp</h2>
            <p className="text-sm leading-relaxed">
              UserApp is a simple and powerful user management platform. Customize, view and connect with your users effortlessly.
            </p>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-3 text-gray-900">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition">Home</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Users</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">About</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-3 text-gray-900">Social</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition">Facebook</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Instagram</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">LinkedIn</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-3 text-gray-900">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-600">Email:</span> support@userapp.com</li>
              <li><span className="text-gray-600">Phone:</span> +998 90 123 45 67</li>
              <li><span className="text-gray-600">Address:</span> Tashkent, Uzbekistan</li>
            </ul>
          </div>
        </div>

      </footer>
    </div>
  )
}

export default Footer;
