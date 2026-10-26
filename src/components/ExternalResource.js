import React from 'react';

export default function ExternalResource(props) {
    let types = {
        "Video": "📼",
        "Immagine": "🖼️",
        "Documento": "📄",
        "Lettura": "📖",
        "Sito Web": "🌐",
        "Audio": "🔊",
        "Strumento": "📐"
    };

    return (
        <div className="external-resource cool-border">
            <div className="external-resource-flex">
                <p className="big-icon">📑</p>
                <div className="">
                    <a className="big-url" href={props.url}>{props.title}</a>
                    <p className="external-resource-type small-line">{props.url}</p>
                    <p className="external-resource-type">Tipo: {types[props.type]} - {props.type}</p>
                    <p className="small-line">{props.children}</p>
                </div>
            </div>
        </div>
    );
}
