import React from 'react';

export default function BoilingVerdict({temperature}) {
    if (temperature >= 100) {
        return <p>The water would boil!</p>
    }

    return <p>The water would not boil.</p>
}
