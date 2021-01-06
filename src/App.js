import React, {useState} from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
import {convertFahrenheitToCelsius} from './temperature';

export default function App() {
    const [temperature, setTemperature] = useState(0);
    const [unit, setUnit] = useState('c');

    return (
        <>
            <h1>React Boiling Verdict</h1>
            <p>Enter a temperatur to find out if water would boil!</p>
            <TemperatureInput onChange={setTemperature} value={temperature} onUnitChange={setUnit} unit={unit} />
            <BoilingVerdict temperature={unit === 'c' ? temperature : convertFahrenheitToCelsius(temperature)} />
        </>
    );
}
