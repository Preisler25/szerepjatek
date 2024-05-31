import React from 'react';

export default function Navbar({ mode, setMode }) {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex justify-between items-center">
                <div className="text-white text-lg">Character Manager</div>
                <div>
                    <button onClick={() => setMode('edit')} className={`text-white p-2 ${mode === 'edit' ? 'underline' : ''}`}>Edit Character</button>
                    <button onClick={() => setMode('create')} className={`text-white p-2 ml-4 ${mode === 'create' ? 'underline' : ''}`}>Create Character</button>
                </div>
            </div>
        </nav>
    );
}