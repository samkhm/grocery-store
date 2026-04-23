import React from 'react'

export default function Item({item}) {
  return (
    <div
            key={item.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-3 group"
          >
            {/* Image */}
            <div className="w-full h-32 flex items-center justify-center overflow-hidden rounded-xl bg-gray-100">
              <img
                src={item.image}
                alt={item.name}
                className="object-contain h-full group-hover:scale-105 transition"
              />
            </div>

            {/* Info */}
            <div className="mt-3">
              <h3 className="text-sm font-medium text-gray-800">
                {item.name}
              </h3>

              <p className="text-green-600 font-semibold text-sm mt-1">
                KSh {item.price}
              </p>
            </div>

            {/* Button */}
            <button
              className="
                mt-3 w-full py-1.5 text-sm
                bg-green-500 text-white rounded-lg                
                hover:bg-green-600 transition
                opacity-2group-hover:opacity-100
              "
            >
              Add to Cart
            </button>
          </div>
  )
}
