import React, { Component } from 'react'
import '../../../App.css'


class LoadingBar extends Component {
    render() {
        return (
            <div className='Kitchen'>
                <ul id="make">
                    <li>
                        <span
                            className="bar kitchen-bar">
                        </span>
                        <h3>Preparing your Product!</h3>
                    </li>
                </ul>
            </div>
        )
    }
}


export default LoadingBar