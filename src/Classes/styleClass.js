import { config } from 'react-spring';


/** Class to generate random style objects for animations */
class styleOb {
    constructor() {
        this.from = {
            transform: `rotate(${Math.random() * 2 - 1}turn)`, 
            x: Math.floor(Math.random() * 1600) - 800,
            y: Math.floor(Math.random() * 1600) - 800,
            opacity: 0, config: config.molasses
        };
        this.enter = {
            transform: 'rotate(0turn)',
            x: 0,
            y: 0,
            opacity: 1,
            config: config.molasses
        };
        this.leave = {
            transform: 'rotate(0.05turn)',
            x: - 800,
            y: 0,
            opacity: 0,
            config: config.gentle 
        };
    }
}

class styleObFromLefttoRight {
    constructor() {
        this.from = {
            transform: `rotate(-0.05turn)`, 
            x: 800,
            y: 0,
            opacity: 0, config: config.gentle,
        };
        this.enter = {
            transform: 'rotate(0turn)',
            x: 0,
            y: 0,
            opacity: 1,
            config: config.molasses,
        };
        this.leave = {
            transform: 'rotate(0.05turn)',
            x: - 800,
            y: 0,
            opacity: 0,
            config: config.gentle 
        };
    }
}



export { styleOb, styleObFromLefttoRight };