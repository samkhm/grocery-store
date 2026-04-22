import React from "react";
import Item from "./Item";

export default function Body() {
    const items = [
        { id: 1, name: "Apples", price: 120, image: "https://via.placeholder.com/150" },
        { id: 2, name: "Bananas", price: 80, image: "https://via.placeholder.com/150" },
        { id: 3, name: "Tomatoes", price: 100, image: "https://via.placeholder.com/150" },
        { id: 4, name: "Milk", price: 60, image: "https://via.placeholder.com/150" },
        { id: 5, name: "Bread", price: 50, image: "https://via.placeholder.com/150" },
        { id: 6, name: "Eggs", price: 200, image: "https://via.placeholder.com/150" },
        { id: 7, name: "Chicken", price: 450, image: "https://via.placeholder.com/150" },
        { id: 8, name: "Rice", price: 300, image: "https://via.placeholder.com/150" },
        { id: 9, name: "Juice", price: 150, image: "https://via.placeholder.com/150" },
        { id: 10, name: "Carrots", price: 90, image: "https://via.placeholder.com/150" },
    ];

    return (
        <div className="px-6 py-6 min-h-screen">

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
             lg:grid-cols-5 gap-6">

                {items.map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                    />
                ))}

            </div>
        </div>
    );
}