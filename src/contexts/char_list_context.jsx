import React, { createContext, useState } from 'react';
import Char from '../models/char';
export const CharListContext = createContext();

const CharListProvider = ({ children }) => {
    const dv = new Char(1, "Darth Vader", "Sith", 100, 100, "https://upload.wikimedia.org/wikipedia/en/7/76/Darth_Vader.jpg");
    const ls = new Char(2, "Luke Skywalker", "Jedi", 100, 100, "https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png");
    const bf = new Char(3, "Boba Fett", "Bounty Hunter", 100, 100, "https://upload.wikimedia.org/wikipedia/en/3/3e/FettbobaJB.png");
    const rd = new Char(4, "R2-D2", "Droid", 100, 100, "https://upload.wikimedia.org/wikipedia/en/3/39/R2-D2_Droid.png");

    const [charList, setCharList] = useState([dv, ls, bf, rd]);

    const addCharacter = (char) => {
        setCharList([...charList, char]);
    };

    const updateCharacter = (updatedChar) => {
        setCharList(charList.map(char => char.id === updatedChar.id ? updatedChar : char));
    };

    return (
        <CharListContext.Provider value={{ charList, addCharacter, updateCharacter }}>
            {children}
        </CharListContext.Provider>
    );
}

export default CharListProvider;