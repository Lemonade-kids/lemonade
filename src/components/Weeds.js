import React, { Component } from 'react';
import '../App.css';
import Dirt from '../images/dirt.png';
import Weed from '../images/weed.png';
import Grass from '../images/grass.png';

const weeds = [Grass, Weed, Dirt];

const dirt = <img src={Dirt} alt="dirt" className="weeds" />;

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

let makeWeeds = getRandomInt(weeds.length);
console.log(weeds[getRandomInt(makeWeeds)]);


class Weeds extends Component {
    render() {
        return (
            <div className="Weeds">
            <div className="grid-container-small">
            
                <div className="grid-item-small"><img src={weeds[getRandomInt(weeds.length)]} alt="weed" className="weeds" /></div>
            </div>
            </div>
        );
    }
}

export default Weeds;