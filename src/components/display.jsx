// Display.js
import React, { useContext, useState } from "react";
import { CharListContext } from "../contexts/char_list_context";
import Card from "./card";
import Editor from "./editor";
import Navbar from "./navbar";
import CardLayout from "./card_layout";

export default function Display() {
  const { charList } = useContext(CharListContext);
  const [mode, setMode] = useState("edit");
  const [selectedChar, setSelectedChar] = useState(charList[0]);

  return (
    <div>
      <Navbar mode={mode} setMode={setMode} />
      <div className="p-4 h-screen bg-slate-800 flex">
        <Editor
          mode={mode}
          selectedChar={selectedChar}
          setSelectedChar={setSelectedChar}
        />
        <CardLayout>
          {charList.map((char) => (
            <Card key={char.id} char={char} />
          ))}
        </CardLayout>
      </div>
    </div>
  );
}
