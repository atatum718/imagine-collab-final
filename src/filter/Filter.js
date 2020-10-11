
import './filter.css';
import React, { Component } from 'react';
//import { Stage, Layer, Rect, Text } from 'react-konva';
//import Konva from 'konva';

class Filter extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return ( 
            <div className="filter-screen-container">
                <div className="hero-image">
                    <img src="./images/logo.jpeg" alt="logo"/>
                </div>
                    
                <div className="filter-image filter-image-container">
                    <img src="" alt=""/>
                </div>

                <div className="editor-container">
                    
                    <div className="image">   
                        <input type="file" id="load" />
                    </div>


                    <div clasName="filters">
                        <button id="men-protest-filter"></button>
                        <button id="man-blackwhite-filter"></button>
                        <button id="girl-filter"/>
                    </div>

                    <div>
                        <label for="brightness">Brightness</label>
                        <input id="brightness" name="brightness" type="range" min="-100" max="100" value="0"/>
                    </div>

                    <div>
                        <label for="vibrance">Vibrance</label>
                        <input id="vibrance" name="vibrance" type="range" min="-100" max="100" value="0"/>
                    </div>


                    <div>
                        <label for="hue">Hue</label>
                        <input id="hue" name="hue" type="range" min="-100" max="100" value="0"/>
                    </div>


                    <button id="vintage" className="filter">Vintage</button>
                    <button id="lomo" className="filter">Lomo</button>
                    <button id="clarity" className="filter">Clarity</button>
                    <button id="orangePeel" className="filter">Orange Peel</button>

                </div>

                <nav className="nav-container">
                    <button id="back" href="">Back</button>
                    <button id="save">Save</button>
                    <button id="share">Share</button>
                    <button id="delete">Delete</button>
                </nav>
            </div> 
        );
    }
}

export default Filter;