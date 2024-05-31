import React from "react";


//this should be a character editor where you can edit the character's name, role, strength, health, and image
export default function Editor(character, setCharacter) {
    return (
        <div className="bg-gray-100 rounded-lg p-4 shadow-lg">
            <input type="number" value={character.id} onChange={(e) => setCharacter({...character, id: e.target.value})} className="w-full rounded-lg p-2 mb-4" />
            <input type="text" value={character.name} onChange={(e) => setCharacter({...character, name: e.target.value})} className="w-full rounded-lg p-2 mb-4" />
            <input type="text" value={character.role} onChange={(e) => setCharacter({...character, role: e.target.value, img: e.target.value})} className="w-full rounded-lg p-2 mb-4" />
            <input type="number" value={character.strength} onChange={(e) => setCharacter({...character, strength: e.target.value})} className="w-full rounded-lg p-2 mb-4" />
            <input type="number" value={character.health} onChange={(e) => setCharacter({...character, health: e.target.value})} className="w-full rounded-lg p-2 mb-4" />
            <button className="bg-blue-500 text-white p-2 rounded-lg w-full">Save</button>
        </div>
    );
    
}