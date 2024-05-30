import React from 'react';

export default function Card({ name, role, strength, health, img}) {

    let card_color = "";
    if (role === "Sith") {
        card_color = "bg-red-100";
    } else if (role === "Jedi") {
        card_color = "bg-blue-100";
    } else if (role === "Bounty Hunter") {
        card_color = "bg-yellow-100";
    } else {
        card_color = "bg-gray-100";
    }
    
    card_color += " rounded-lg p-4 shadow-lg";

    return (
        <div className={card_color}>
            <img src={img} alt={name} className="rounded-lg w-full h-48 object-cover" />
            <div className="text-xl font-bold mt-4">{name}</div>
            <div className="text-gray-600">{role}</div>
            <div className="mt-4">
                <div className="text-gray-600">Strength: {strength}</div>
                <div className="text-gray-600">Health: {health}</div>
            </div>
        </div>
    )
    }