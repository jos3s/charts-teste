import React from "react";
import "./Card.css"
export default function Card(props) {

    return (
        <div 
            className={props.size ? `Card ${props.size}` : "Card"} 
            style={{ borderColor: props.color || 'rgb(61, 61, 61)' , height: props.height}}
        >
            <div className="Content">
                {props.children}
            </div>

            {props.titulo
                ? <div className="Footer" style={{ borderColor: props.color || 'rgb(61, 61, 61)' }}>
                    <h3>{props.titulo}</h3>
                </div>
                : ""}
        </div>
    )
}