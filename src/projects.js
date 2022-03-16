import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTransition, animated, config} from 'react-spring';


const Projects = () => {
    const [visible, setVisible] = useState(true);
    const navigate = useNavigate();

    const transition = useTransition(visible, {
        // from: {x: -100, y: 800, opacity: 0, config: config.molasses},
        enter: {x: 0, y: 0, opacity: 1, config: config.molasses},
        leave: {x: 100, y: -800, opacity: 0, config: config.molasses },
    });

    const handleClick = ({ target }) => {
        console.log (target.id);
        setVisible(false);
        let start = Date.now();
        let timer = setInterval(() => {
            let elapsed = Date.now() - start;
            if (elapsed > 2000) {
                clearInterval(timer);
                navigate('/');
            }
        }, 20)
    }

    return (
        <div id="projects">
            <h1>Projects</h1>
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

export { Projects };