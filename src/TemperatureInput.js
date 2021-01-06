import React from 'react';

export default function TemperatureInput({onChange, value}) {
    return (
        <fieldset>
            <input type="number" step={0.1} onChange={(event) => onChange(event.target.value)} value={value} />
        </fieldset>
    );
}
