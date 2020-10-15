import './filter.css';
import React, { Component } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import { Route, Switch, Link } from "react-router-dom";
import Konva from 'konva';
import useImage from 'use-image';


class Filter extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file_url: null,
      slider_value: 0,
    }
  }
  
handleChange = (event) => {
  this.setState({
    file_url: URL.createObjectURL(event.target.files[0]),
  });
}

handleSlider = (event) => {
  this.setState({
    slider_value: event.target.value - 50,
  });
}
  
    render() {
      return ( 
      <>
        <div className="filter-screen-container">                        
          <div class="contrast">
            <Stage width={window.innerWidth - 400} height={window.innerHeight - 400}>
              <Layer>
                <FilterImage file_url={this.state.file_url} value={this.state.slider_value} />
              </Layer>
            </Stage>
          </div>

          
          {/* <input className="input1" type="file" onChange={this.handleChange}/> */}
          
          <p>{this.state.slider_value}</p>
          <input type="range" onChange={(event) => this.handleSlider(event)} />
  
        </div>
        <div className="button5"> <input className="input1" type="file" onChange={this.handleChange}/> </div>
      </>
      );
      
    }
}

class FilterImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }; 

    // Fix this too, need to create an image object to render to the Konva Image tag
    // React is throwing errors though because of where its being run

      // const [image] = useImage(props.file_url);
  }

    /*
    Props transfer over successfully
    File url for uploaded image world properly
    Having issues with React.useEffect and React.useRef()
    Unable to apply changes to the image due to bad ref cache
    Error is "imageRef.current is undefined"
    Everything else seems to be working OK for now
    */
  
    // Sample code found on the Konva docs below \/ \/ \/
    // when image is loaded we need to cache the shape
    // React.useEffect(() => {
    //   if (image) {
    //     // you many need to reapply cache on some props changes like shadow, stroke, etc.
    //     imageRef.current.cache();
    //     // since this update is not handled by "react-konva" and we are using Konva methods directly
    //     // we have to redraw layer manually
    //     imageRef.current.getLayer().batchDraw();
    //   }
    // }, [image]);
  
    render() {
      return (
        <Image
          x={10}
          y={10}
          image={this.state.image}
          filters={[Konva.Filters.Blur]}
          blurRadius={this.props.value}
        />
      );
    };
};



export default Filter;