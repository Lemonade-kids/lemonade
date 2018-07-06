import React, { Component } from 'react';
import '../App.css';
import Produce from './Produce';
import Weeds from './Weeds';

// const weeds = [Grass, Weed, Dirt];

// const getRandomInt = (max) => {
//     return Math.floor(Math.random() * Math.floor(max));
// };

// let makeWeeds = getRandomInt(weeds.length);
// console.log(weeds[getRandomInt(makeWeeds)]);


class GardenGrid extends Component {
    render() {
        return (
            <div className="GardenGrid">
            <div className="grid-container-small">
                <div className="grid-item-small"><Weeds /></div>
                <div className="grid-item-small"><Weeds /></div>
                <div className="grid-item-small"><Weeds /></div>
                <div className="grid-item-small"><Weeds /></div>
                <div className="grid-item-small"><Produce /></div>
                <div className="grid-item-small"><Weeds /></div>
                <div className="grid-item-small"><Weeds /></div>
                <div className="grid-item-small"><Weeds /></div>
                <div className="grid-item-small"><Weeds /></div>
            </div>
            </div>
        );
    }
}

export default GardenGrid;