import React, { Component } from 'react';
import '../App.css';
import Dirt from '../images/dirt.png';
import Weed from '../images/weed.png';
import Grass from '../images/grass.png';
import Sprout from '../images/sprout.png';

const weeds = [Grass, Weed, Dirt];

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

let makeWeeds = getRandomInt(weeds.length);
console.log(weeds[getRandomInt(makeWeeds)]);


class GardenGrid extends Component {
    render() {
        return (
            <div className="GardenGrid">
            <div className="grid-container-small">
                <div className="grid-item-small"><img src={weeds[getRandomInt(weeds.length)]} alt="weed" className="weeds" /></div>
                <div className="grid-item-small"><img src={weeds[getRandomInt(weeds.length)]} alt="weed" className="weeds" /></div>
                <div className="grid-item-small"><img src={weeds[getRandomInt(weeds.length)]} alt="weed" className="weeds" /></div>
                <div className="grid-item-small"><img src={weeds[getRandomInt(weeds.length)]} alt="weed" className="weeds" /></div>
                <div className="grid-item-small"><img src={weeds[getRandomInt(weeds.length)]} alt="weed" className="weeds" /></div>
                <div className="grid-item-small"><img src={weeds[getRandomInt(weeds.length)]} alt="weed" className="weeds" /></div>
                <div className="grid-item-small"><img src={weeds[getRandomInt(weeds.length)]} alt="weed" className="weeds" /></div>
                <div className="grid-item-small"><img src={weeds[getRandomInt(weeds.length)]} alt="weed" className="weeds" /></div>
                <div className="grid-item-small"><img src={weeds[getRandomInt(weeds.length)]} alt="weed" className="weeds" /></div>
            </div>
            </div>
        );
    }
}

export default GardenGrid;