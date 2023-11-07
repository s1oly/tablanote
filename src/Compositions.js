
import React, { useState } from 'react';
import './Compositions.css';

const Compositions = () => {
    const [compositions, setCompositions] = useState([]);
    const addComposition = (newComposition) => {
        setCompositions(compositions.push(newComposition))
    }

    return (
        <div>
            <h2>List of Compositions</h2>
            <ul>
                {compositions.map((compositions,index) => (
                    <li key = {index}> compositions</li>
                ))}
            </ul>
        </div>
    );
}