import React from 'react';
import BoilingVerdict from './BoilingVerdict';

export default function App() {
    return (
        <>
            <h1>React Boiling Verdict</h1>
            <p>Enter a temperatur to find out if water would boil!</p>
            <BoilingVerdict temperature={100} />
        </>
    );
}
