import React, { createContext, useState } from "react";
import Char from "../models/char";
export const CharListContext = createContext();

const CharListProvider = ({ children }) => {
  const dv = new Char(
    1,
    "Darth Vader",
    "Sith",
    30,
    70,
    "https://upload.wikimedia.org/wikipedia/en/f/f7/Darth_Vader.png"
  );
  const ls = new Char(
    2,
    "Luke Skywalker",
    "Jedi",
    70,
    30,
    "https://upload.wikimedia.org/wikipedia/en/b/b1/Luke_Skywalker_in_Return_of_the_Jedi_and_The_Last_Jedi.jpg"
  );
  const bf = new Char(
    3,
    "Boba Fett",
    "Bounty Hunter",
    50,
    50,
    "https://upload.wikimedia.org/wikipedia/en/3/3e/FettbobaJB.png"
  );
  const rd = new Char(
    4,
    "R2-D2",
    "Droid",
    90,
    10,
    "https://upload.wikimedia.org/wikipedia/en/3/39/R2-D2_Droid.png"
  );

  const [charList, setCharList] = useState([dv, ls, bf, rd]);

  const addCharacter = (char) => {
    console.log(charList.length);
    const newId = charList.length ? charList.length + 1 : 1;
    char.id = newId;
    setCharList([...charList, char]);
  };

  const updateCharacter = (updatedChar) => {
    setCharList(
      charList.map((char) => (char.id === updatedChar.id ? updatedChar : char))
    );
  };

  return (
    <CharListContext.Provider
      value={{ charList, addCharacter, updateCharacter }}
    >
      {children}
    </CharListContext.Provider>
  );
};

export default CharListProvider;
