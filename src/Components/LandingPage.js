import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTransition, animated, config } from "react-spring";
import { styleOb, styleObFromLefttoRight } from "../Classes/styleClass.js";

import "../Styles/components/landing.scss";

const LandingPage = ({ firstLoad, toggleFirstLoad }) => {
    const [div1, setDiv1] = useState();

    const handleMouseMove = (e) => {
        console.log('move');
    }

    return (
        <div class="landing" onMouseMove={handleMouseMove}>
            <div className="one" style={div1}></div>
            <div className="two"></div>
            <div className="three"></div>
        </div>
    );
};

export { LandingPage };
