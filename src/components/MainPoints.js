import React from 'react';

export default function MainPoints(props) {
    return (
        <div className="main-points cool-border">
        <p className="main-points-title">Parole Chiave:</p>
        <div className="main-points-words-container">
        {props.words.map((word) => {
            return <p className="main-points-word" key={word}>{word}</p>;
        })}
        </div>
        </div>
    );
}
