// Display.js
import React, { useContext, useState } from 'react';
import { CharListContext } from '../contexts/char_list_context';
import Card from './card';
import Editor from './editor';
import Navbar from './navbar';

export default function Display() {
    const { charList } = useContext(CharListContext);
    const [mode, setMode] = useState('edit');
    const [selectedChar, setSelectedChar] = useState(charList[0]);

    return (
        <div>
            <Navbar mode={mode} setMode={setMode} />
            <div className="flex">
                <Editor mode={mode} selectedChar={selectedChar} setSelectedChar={setSelectedChar} />
                <div className="grid grid-cols-3 gap-4">
                    {charList.map(char => (
                        <Card key={char.id} char={char} />
                    ))}
                </div>
            </div>
        </div>
    );
}
