import React, {useState} from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

export default function App() {
    const [temperature, setTemperature] = useState(0);

    return (
        <>
            <h1>React Boiling Verdict</h1>
            <p>Enter a temperatur to find out if water would boil!</p>
            <TemperatureInput onChange={setTemperature} value={temperature} />
            <BoilingVerdict temperature={temperature} />
        </>
    );
}
