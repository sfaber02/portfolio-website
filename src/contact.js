import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTransition, animated, config} from 'react-spring';


const Contact = () => {

    const [visible, setVisible] = useState(true);
    const navigate = useNavigate();

    const transition = useTransition(visible, {
        // from: {x: -100, y: 800, opacity: 0, config: config.molasses},
        enter: {x: 0, y: 0, opacity: 1, config: config.molasses},
        leave: {x: 100, y: -800, opacity: 0, config: config.molasses },
    });

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
        <div id="contact" className='mainPageContainers'>
            <h1>Contact</h1>
            {transition((style, item) => {
                    return ( item ?
                        <animated.div style={style} className='item'>
                            <button id="goBack" onClick={handleClick}>Go Back</button>
                        </animated.div> : ''
                    )
                })}
        </div>
    );
}

export { Contact };