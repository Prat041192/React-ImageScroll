import React from 'react';
import PropTypes from 'prop-types';
import { Image } from "react-bootstrap";

export const ImgCard = ({logo}) => {
    const {src, id, label, alt} = logo;
    return (
        <div id= {id} className="Card">
            <Image src={src} alt={alt} className='img'></Image>
            <div className="details">
                <p>{label}</p>
            </div>
            <hr/>
        </div>
    )
}
 