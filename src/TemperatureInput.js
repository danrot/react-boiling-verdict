import React from 'react';
import {convertCelsiusToFahrenheit, convertFahrenheitToCelsius} from './temperature';

export default function TemperatureInput({onChange, value, onUnitChange, unit}) {
    function handleUnitChange(event) {
        const newUnit = event.target.value;

        if (newUnit === unit) {
            return;
        }

        if (unit === 'c' && newUnit === 'f') {
            onChange(convertCelsiusToFahrenheit(value));
        } else if(unit === 'f' && newUnit === 'c') {
            onChange(convertFahrenheitToCelsius(value));
        }

        onUnitChange(newUnit);
    }

    function setTemperature(temperature, unit) {
        onChange(temperature);
        onUnitChange(unit);
    }

    return (
        <fieldset>
            <input type="number" step={0.1} onChange={(event) => onChange(event.target.value)} value={value} />
            <select onChange={handleUnitChange} value={unit}>
                <option value="c">°C</option>
                <option value="f">°F</option>
            </select>
            <button onClick={() => setTemperature(37, 'c')}>Set 37°C</button>
        </fieldset>
    );
}
