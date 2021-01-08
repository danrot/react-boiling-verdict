import React from 'react';
import {convertCelsiusToFahrenheit, convertFahrenheitToCelsius} from './temperature';

export default function TemperatureInput({onChange, value, onUnitChange, unit}) {
    function setTemperature(temperature, unit) {
        onChange(temperature);
        onUnitChange(unit);
    }

    return (
        <fieldset>
            <input type="number" step={0.1} onChange={(event) => onChange(event.target.value)} value={value} />
            <select onChange={(event) => onUnitChange(event.target.value)} value={unit}>
                <option value="c">°C</option>
                <option value="f">°F</option>
            </select>
            <button onClick={() => setTemperature(37, 'c')}>Set 37°C</button>
        </fieldset>
    );
}
