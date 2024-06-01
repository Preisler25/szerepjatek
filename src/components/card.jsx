// Card.js
import React from 'react';

export default function Card({ char }) {
    let cardColor = "bg-gray-100";

    if (char.role === "Sith") {
        cardColor = "bg-red-100";
    } else if (char.role === "Jedi") {
        cardColor = "bg-blue-100";
    } else if (char.role === "Bounty Hunter") {
        cardColor = "bg-yellow-100";
    } else
    {
        cardColor = "bg-gray-100";
    }

    return (
        <div className={`${cardColor} rounded-lg p-4 shadow-lg`}>
            <img src={char.img} alt={char.name} className="rounded-lg w-full h-48 object-cover" />
            <div className="text-xl font-bold mt-4">{char.name}</div>
            <div className="text-gray-600">{char.role}</div>
            <div className="mt-4">
                <div className="text-gray-600">Strength: {char.strength}</div>
                <div className="text-gray-600">Health: {char.health}</div>
            </div>
        </div>
    );
}
