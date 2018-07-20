import React, { Component } from 'react';
import '../App.css';
import Dirt from '../images/dirt.png';
import Weed from '../images/weed.png';
import Grass from '../images/grass.png';

const weeds = [Grass, Weed, Dirt];

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

let makeWeeds = getRandomInt(weeds.length);
console.log(weeds[getRandomInt(makeWeeds)]);


class Weeds extends Component {
    constructor(props) {
        super(props)
        //props.CCGarden;
    }
    // whichAction(action) {
    //     switch (action) {
    //         case 'water':
    //         return null;
    //         case 'weed':
    //         return <img src={Dirt} alt="dirt" className="weeds" />;
    //         case 'harvest':
    //         return null;
    //         default:
    //         return <img src={weeds[getRandomInt(weeds.length)]} alt="weed" className="weeds" />;
    //     }
    // }
    render() {
        return (
            <div className="Weeds">
            <div className="grid-container-small">
                <div className="grid-item-small"><img src={weeds[getRandomInt(weeds.length)] /* Dirt */} className="weeds" alt="weeds" /></div>
            </div>
            </div>
        );
    }
}

export default Weeds;