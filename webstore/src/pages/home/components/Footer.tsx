import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10">
      
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            🛒 FreshMart
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Fresh groceries delivered to your doorstep. Fast, reliable, and affordable.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Shop
          </h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="hover:text-green-500 cursor-pointer">Fruits</li>
            <li className="hover:text-green-500 cursor-pointer">Vegetables</li>
            <li className="hover:text-green-500 cursor-pointer">Dairy</li>
            <li className="hover:text-green-500 cursor-pointer">Beverages</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Support
          </h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="hover:text-green-500 cursor-pointer">Help Center</li>
            <li className="hover:text-green-500 cursor-pointer">Delivery Info</li>
            <li className="hover:text-green-500 cursor-pointer">Returns</li>
            <li className="hover:text-green-500 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Stay Updated
          </h3>
          <p className="text-sm text-gray-500 mb-3">
            Get offers and updates directly to your inbox.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button className="bg-green-500 text-white px-4 rounded-r-lg hover:bg-green-600 transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} FreshMart. All rights reserved.
      </div>
    </footer>
  );
}