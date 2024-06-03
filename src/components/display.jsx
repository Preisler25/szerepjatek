import React, { useContext, useState } from "react";
import { CharListContext } from "../contexts/char_list_context";
import Card from "./card";
import Editor from "./editor";
import Navbar from "./navbar";
import CardLayout from "./card_layout";
import InfoBlock from "./info_block";
import Footer from "./footer";

export default function Display() {
  const { charList } = useContext(CharListContext);
  const [mode, setMode] = useState("edit");
  const [selectedChar, setSelectedChar] = useState(charList[0]);

  return (
    <div className="bg-slate-800 h-5/6">
      <Navbar mode={mode} setMode={setMode} />
      <InfoBlock
        list={[
          {
            title: "Editing / Creating",
            text: "A navbarban található 'Edit Character' gombal tudunk egy kiválasztott karaktert szerkeszteni, a 'Create Character' gombal pedig új karaktert hozhatunk létre. ",
          },
          {
            title: "Role Colors",
            text: "A karakterek kártyáinak háttérszíne a karakter szerepe alapján változik. A Sith karakterek piros, a Jedi karakterek kék, a Bounty Hunter karakterek sárga háttérszínnel rendelkeznek az egyéb karakterek pedig szürke háttérszínnel.",
          },
        ]}
      />
      <div className="p-4 h-4/5 flex">
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
      <Footer />
    </div>
  );
}
