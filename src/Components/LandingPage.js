import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTransition, animated, config } from "react-spring";
import { styleOb, styleObFromLefttoRight } from "../Classes/styleClass.js";

import "../Styles/components/landing.scss";

const LandingPage = ({ firstLoad, toggleFirstLoad }) => {
    const [div1, setDiv1] = useState();
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setCoords({
            x: event.clientX - event.target.offsetLeft,
            y: event.clientY - event.target.offsetTop,
        });
    };

    useEffect(() => {
        setDiv1({ left: `${coords.x}px`, top: `${coords.y}px`});
    }, [coords]);

    useEffect(() => {
        // const breathe = setInterval(() => {
            setDiv1({
                borderLeft: `${Math.floor(Math.random() * 500)}px solid yellow`,
                borderRight: `${Math.floor(
                    Math.random() * 500
                )}px solid purple`,
                borderBottom: `${Math.floor(Math.random() * 500)}px solid blue`,
                borderTop: `${Math.floor(Math.random() * 500)}px solid orange`,
            });
        // }, 1000);
    }, []);

    return (
        <div class="landing" onMouseMove={handleMouseMove}>
            {coords.x}
            {"/"}
            {coords.y}
            <div className="one" style={div1}></div>
            <div className="two"></div>
            <div className="three"></div>
        </div>
    );
};

export { LandingPage };
