import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTransition, animated, config} from 'react-spring';
import { styleObFromLefttoRight } from './styleClass';


const Experience = () => {

    const [visible, setVisible] = useState(true);
    const navigate = useNavigate();

    const transition = useTransition(visible, new styleObFromLefttoRight());

    const handleClick = () => {
        setVisible(false);
        let start = Date.now();
        let timer = setInterval(() => {
            let elapsed = Date.now() - start;
            if (elapsed > 500) {
                clearInterval(timer);
                navigate('/');
            }
        }, 20)
    }

    return (
        <div id="experiencePage" className='mainPageContainers'>
            <h1>Experience</h1>
            {transition((style, item) => {
                    return ( item ?
                        <animated.div style={style} className='item'>
                            <button id="goBack" className='buttons' onClick={handleClick}>Go Back</button>
                        </animated.div> : ''
                    )
                })}
        </div>
    );
}

export { Experience };