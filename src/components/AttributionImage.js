import React from 'react';

export default function AttributionImage(props) {
    return (
        <div className="attribution-image">
            <img src={props.src} />
            <div className="attribution-image-text-box">
                <p className="attribution-image-description">{props.description}</p>
                <p className="small-line no-margin">Immagine di: <a href={props.authorLink}>{props.author}</a></p>
                <p className="small-line no-margin">Licenza: <a href={props.licenseUrl}>{props.license}</a></p>
            </div>
        </div>
    );
}
