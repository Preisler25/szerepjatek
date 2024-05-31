// App.js
import React from 'react';
import CharListProvider from './contexts/char_list_context';
import Display from './components/display';

export default function App() {
    return (
        <CharListProvider>
            <Display />
        </CharListProvider>
    );
}
