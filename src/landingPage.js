import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleProjectsClick = () => {
        navigate('/projects');
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
                <div>
                    <h1>Shawn Faber</h1>
                </div>
                <div>
                    <h1>Digital Resume</h1>
                </div>
                <div>
                    <button onClick={handleProjectsClick}>Projects</button>
                </div>
                <div>
                    <button onClick={handleSkillsClick}>Skills</button>
                </div>
                <div>
                    <button onClick={handleExperienceClick}>Experience</button>
                </div>
                <div>
                    <button onClick={handleContactClick}>Contact</button>
                </div>
            </div>
        </>
    );
}


export { LandingPage };