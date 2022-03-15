import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTransition, animated, config} from 'react-spring';


const LandingPage = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(true);


    /**Variations of transitions for different elements */
    const transition = useTransition(visible, {
        from: {x: -100, y: 800, opacity: 0, config: config.molasses},
        enter: {x: 0, y: 0, opacity: 1, config: config.molasses},
        leave: {x: 100, y: -800, opacity: 0, config: config.molasses },
    });
    const transition2 = useTransition(visible, {
        from: {x: 100, y: -800, opacity: 0, config: config.molasses},
        enter: {x: 0, y: 0, opacity: 1, config: config.molasses},
        leave: {x: 100, y: -800, opacity: 0, config: config.molasses },
    });
    const transition3 = useTransition(visible, {
        from: {x: -60, y: -800, opacity: 0, config: config.molasses},
        enter: {x: 0, y: 0, opacity: 1, config: config.molasses},
        leave: {x: 100, y: -800, opacity: 0, config: config.molasses },
    });
    const transition4 = useTransition(visible, {
        from: {x: -400, y: 50, opacity: 0, config: config.molasses},
        enter: {x: 0, y: 0, opacity: 1, config: config.molasses},
        leave: {x: 100, y: -800, opacity: 0, config: config.molasses },
    });

    /** Navigation Button Event Handlers */
    const handleProjectsClick = () => {
        setVisible(false);
        navigate('/projectsTest');
    }

    const handleContactClick = () => {
        navigate('/contact');
    }

    const handleExperienceClick = () => {
        navigate('/experience');
    }

    const handleSkillsClick = () => {
        navigate('/skills');
    }

    
    return (
        <>
            <div id='landingPage'>
                {transition((style, item) => {
                    return (
                        <animated.div style={style} className='item'>
                            <h1>Shawn Faber</h1>
                        </animated.div>
                    )
                })}
                {transition2((style, item) => {
                    return (
                        <animated.div style={style} className='item'>
                            <h1>Digital Resume</h1>
                        </animated.div>
                    )
                })}
                {transition3((style, item) => {
                    return (
                        <animated.div style={style} className='item'>
                            <button onClick={handleProjectsClick}>Projects</button>
                        </animated.div>
                    )
                })}
                {transition4((style, item) => {
                    return (
                        <animated.div style={style} className='item'>
                            <button onClick={handleSkillsClick}>Skills</button>
                        </animated.div>
                    )
                })}
                {transition((style, item) => {
                    return (
                        <animated.div style={style} className='item'>
                            <button onClick={handleExperienceClick}>Experience</button>
                        </animated.div>
                    )
                })}
                {transition3((style, item) => {
                    return (
                        <animated.div style={style} className='item'>
                            <button onClick={handleContactClick}>Contact</button>
                        </animated.div>
                    )
                })}
            </div>
        </>
    );

    const ProjectsTest = () => {
        return <h1>Projects</h1>;
    }
}


export { LandingPage };