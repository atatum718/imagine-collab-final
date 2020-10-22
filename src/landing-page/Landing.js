import React, { Component } from 'react';
import "./landing.css";
import logo from "../preview/Assets/logo.png";

class Landing extends Component {
    render() {
        return (
        <div className="parent">
            <div className="icon">
                <img src={logo} alt="logo"></img>
            </div>
            
        </div>
        );
    }
}

export default Landing;