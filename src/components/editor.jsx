// Editor.js
import React, { useState, useContext } from "react";
import { CharListContext } from '../contexts/char_list_context';
import Char from '../models/char';

export default function Editor({ mode, selectedChar, setSelectedChar }) {
    const { charList, addCharacter, updateCharacter } = useContext(CharListContext);
    const [character, setCharacter] = useState(selectedChar || new Char(charList.length + 1, '', '', 0, 0, ''));

    const handleSave = () => {
        if (mode === 'create') {
            addCharacter(character);
        } else {
            updateCharacter(character);
        }
        setCharacter(new Char(charList.length + 1, '', '', 0, 0, ''));
    };

    const handleSelectChange = (e) => {
        const charId = parseInt(e.target.value, 10);
        const char = charList.find(c => c.id === charId);
        setSelectedChar(char);
        setCharacter(char);
    };

    return (
        <div className="bg-gray-100 rounded-lg p-4 shadow-lg">
            {mode === 'edit' && (
                <select value={character.id} onChange={handleSelectChange} className="w-full rounded-lg p-2 mb-4">
                    {charList.map(char => (
                        <option key={char.id} value={char.id}>{char.name}</option>
                    ))}
                </select>
            )}
            <input type="text" value={character.name} onChange={(e) => setCharacter({ ...character, name: e.target.value })} className="w-full rounded-lg p-2 mb-4" placeholder="Name" />
            <input type="text" value={character.role} onChange={(e) => setCharacter({ ...character, role: e.target.value })} className="w-full rounded-lg p-2 mb-4" placeholder="Role" />
            <input type="number" value={character.strength} onChange={(e) => setCharacter({ ...character, strength: parseInt(e.target.value, 10) })} className="w-full rounded-lg p-2 mb-4" placeholder="Strength" />
            <input type="number" value={character.health} onChange={(e) => setCharacter({ ...character, health: parseInt(e.target.value, 10) })} className="w-full rounded-lg p-2 mb-4" placeholder="Health" />
            <input type="text" value={character.img} onChange={(e) => setCharacter({ ...character, img: e.target.value })} className="w-full rounded-lg p-2 mb-4" placeholder="Image URL" />
            <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded-lg w-full">Save</button>
        </div>
    );
}
