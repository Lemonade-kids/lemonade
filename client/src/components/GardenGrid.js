import React, { Component } from 'react';
import '../App.css';
import Produce from './Produce';
import Weeds from './Weeds';

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