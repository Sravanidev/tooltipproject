import React, { useState } from 'react';
import './tooltip.css';
import styled from "styled-components";
import {motion} from "framer-motion";


function Tooltip(props){
    const [showTip, setShowtip] = useState(false);

    const Tool = styled.p`
    max.width: 200px;
    position: absolute;
    
    top:${props.position=== "right" 
    ? "63%"
    : props.position === "left"
    ? "63%"
    : props.position === "top"
    ? "62%"
    : props.position === "bottom"
    ? "75%"
    :    null};

    right: ${props.position === "right" ? "30%"
    :null};


    left: ${props.position === "left"
    ? "32%"
    : props.position === "top"
    ? "42%"
    :props.position === "bottom"
    ?"42%"
    :null};

    `;

    return(
        <div className='tool-container'>
            <button
            className='hoveronme'
            onMouseEnter={() => setShowtip(true)}
            onMouseLeave={() => setShowtip(false)}
            >
                Hover on me!
            </button>
           
            {showTip? <Tool className="tooltip"> {props.text}
             </Tool>: null }



        </div>
    )
}

export default Tooltip;
