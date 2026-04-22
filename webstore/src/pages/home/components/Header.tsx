import React from 'react'

export default function Header() {
    return (
        <div className="flex items-center gap-4 px-6 py-3 bg-white shadow-sm border-b">

            {/* Filter */}
            <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2
                 text-sm font-medium text-gray-700 bg-gray-100 
                 rounded-lg hover:bg-gray-200 transition">
                    🧃 Filter
                </button>

                <div className="absolute left-0 mt-2 w-44 bg-white border 
                rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 
                group-hover:visible transition-all duration-200">
                    <a className="block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">Fruits</a>
                    <a className="block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">Vegetables</a>
                    <a className="block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">Beverages</a>
                </div>
            </div>

            {/* Search */}
            <div className="flex-1">
                <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                        🔍
                    </span>

                    <input
                        type="text"
                        placeholder="Search groceries..."
                        className="
          w-full pl-10 pr-4 py-2.5
          text-sm text-gray-700 placeholder-gray-400
          bg-gray-50 border border-gray-200 rounded-xl
          focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400
          transition-all duration-200
        "
                    />
                </div>
            </div>

            {/* Cart */}
            <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2
                 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg
                  hover:bg-gray-200 transition">
                    🛒 Cart
                    <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                        2
                    </span>
                </button>

                <div className="absolute right-0 mt-2 w-56 bg-white
                 border rounded-xl shadow-lg p-3 opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <p className="text-sm text-gray-600">2 items in cart</p>
                    <button className="mt-2 w-full bg-green-500 text-white py-1.5 
                    rounded-lg text-sm hover:bg-green-600 transition">
                        View Cart
                    </button>
                </div>
            </div>

            {/* Account */}
            <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2
                 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                    👤 Account
                </button>

                <div className="absolute right-0 mt-2 w-40 bg-white
                 border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100
                  group-hover:visible transition-all duration-200 overflow-hidden">
                    <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                        Login
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                        Register
                    </button>
                </div>
            </div>

        </div>
    )
}
