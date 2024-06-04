import React, { useState, useContext } from "react";
import { CharListContext } from "../contexts/char_list_context";
import Char from "../models/char";

export default function Editor({ mode, selectedChar, setSelectedChar }) {
  const { charList, addCharacter, updateCharacter } =
    useContext(CharListContext);
  const [character, setCharacter] = useState(
    selectedChar || new Char(charList.length + 1, "", "", 0, 0, "")
  );
  const [error, setError] = useState("");

  const isValidUrl = (url) => {
    const urlRegex = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm;
    return urlRegex.test(url);
  };

  const isNameUnique = (name) => {
    return !charList.some((char) => char.name === name);
  };

  const handleSave = () => {
    if (!character.name) {
      setError("Name cannot be empty.");
      return;
    }

    if (!isNameUnique(character.name)) {
      setError("A character with this name already exists.");
      return;
    }

    if (!character.img) {
      setError("Image URL cannot be empty.");
      return;
    }

    if (!isValidUrl(character.img)) {
      setError("Image URL is not valid.");
      return;
    }

    if (character.strength + character.health <= 100) {
      if (mode === "create") {
        addCharacter(character);
      } else {
        updateCharacter(character);
      }
      setCharacter(new Char(charList.length + 1, "", "", 0, 0, ""));
      setError("");
    } else {
      setError("Total points (strength + health) cannot exceed 100.");
    }
  };

  const handleSelectChange = (e) => {
    const charId = parseInt(e.target.value, 10);
    const char = charList.find((c) => c.id === charId);
    setSelectedChar(char);
    setCharacter(char);
    setError("");
  };

  const handleStrengthChange = (e) => {
    const newStrength = parseInt(e.target.value, 10);
    if (newStrength + character.health <= 100) {
      setCharacter({ ...character, strength: newStrength });
      setError("");
    } else {
      setError("Total points (strength + health) cannot exceed 100.");
    }
  };

  const handleHealthChange = (e) => {
    const newHealth = parseInt(e.target.value, 10);
    if (newHealth + character.strength <= 100) {
      setCharacter({ ...character, health: newHealth });
      setError("");
    } else {
      setError("Total points (strength + health) cannot exceed 100.");
    }
  };

  return (
    <div className="bg-gray-100 rounded-lg p-4 shadow-lg w-2/3 h-[65vh] overflow-y-scroll overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-4">
        {mode === "create" ? "Create Character" : "Edit Character"}
      </h1>
      {mode === "edit" && (
        <div>
          <label htmlFor="sc">Selected Character:</label>
          <select
            value={character.id}
            onChange={handleSelectChange}
            className="w-full rounded-lg p-2 mb-4"
            id="sc"
          >
            {charList.map((char) => (
              <option key={char.id} value={char.id}>
                {char.name}
              </option>
            ))}
          </select>
        </div>
      )}
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        value={character.name}
        onChange={(e) => setCharacter({ ...character, name: e.target.value })}
        className="w-full rounded-lg p-2 mb-4"
        placeholder="Name"
        id="name"
      />
      <label htmlFor="role">Role:</label>
      <input
        id="role"
        type="text"
        value={character.role}
        onChange={(e) => setCharacter({ ...character, role: e.target.value })}
        className="w-full rounded-lg p-2 mb-4"
        placeholder="Role"
      />
      <label htmlFor="str">
        Strength: <span>{character.strength}</span>
      </label>
      <input
        id="str"
        type="range"
        min="0"
        max="100"
        value={character.strength}
        onChange={handleStrengthChange}
        className="w-full rounded-lg p-2 mb-4"
      />

      <label htmlFor="health">
        Health: <span>{character.health}</span>
      </label>
      <input
        id="health"
        type="range"
        min="0"
        max="100"
        value={character.health}
        onChange={handleHealthChange}
        className="w-full rounded-lg p-2 mb-4"
      />

      <label htmlFor="img">ImageURL:</label>
      <input
        id="img"
        type="text"
        value={character.img}
        onChange={(e) => setCharacter({ ...character, img: e.target.value })}
        className="w-full rounded-lg p-2 mb-4"
        placeholder="Image URL"
      />
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white p-2 rounded-lg w-full"
      >
        Save
      </button>
    </div>
  );
}
