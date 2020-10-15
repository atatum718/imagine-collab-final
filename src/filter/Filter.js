import "./filter.css";
import React, { Component } from "react";

import Konva from "konva";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";

const ImageViewer = (props) => {
  const [image] = useImage(props.fileUrl, 'Anonimus');
  const imageRef = React.useRef();

  // when image is loaded we need to cache the shape
  React.useEffect(() => {
    if (image) {
      // you many need to reapply cache on some props changes like shadow, stroke, etc.
      imageRef.current.cache();
      // since this update is not handled by "react-konva" and we are using Konva methods directly
      // we have to redraw layer manually
      imageRef.current.getLayer().batchDraw();
    }
  }, [image]);

  //console.log(JSON.stringify(props));

  return (
    <Image
      ref={imageRef}
      x={100}
      y={100}
      image={image}
      filters={[Konva.Filters.HSV]}
      saturation={props.saturation / 100}
      value={props.contrast / 100}
      shadowBlur={5}
    />
  );
  // https://konvajs.org/api/Konva.Filters.html#.HSV
};



class ImageControls extends React.Component {
  constructor(props) {
    super(props);
  }

  handleContSlider = (event) => {
    this.props.handleContrastUpdate((event.target.value - 50) * 2);
  };

  handleSatSlider = (event) => {
    this.props.handleSaturationUpdate((event.target.value - 50) * 2);
  };



  render() {
    return (
      <div>
        <p>Contrast: {this.props.contrastVal}</p>
        <input type="range" onChange={(event) => this.handleContSlider(event)} />
        <p>Saturation: {this.props.saturationVal}</p>
        <input type="range" onChange={(event) => this.handleSatSlider(event)} />
        <br/>
        <br/>
        <br/>
        
        <input
          className="input1"
          type="file"
          onChange={(event) => this.props.handleUpload(event)}
        />
      </div>
    );
  }
}

class Filter extends Component {
  state = {
    contrastVal: 0,
    saturationVal: 0,
    fileUrl: new URL("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTc111TqOByv02UVqoDNIgnhzyfPG7Fefd5-w&usqp=CAU"),
  };

  handleUpload = (event) => {
    this.setState({
      fileUrl: URL.createObjectURL(event.target.files[0]),
    });
  };

  handleContrastUpdate = (value) => {
    this.setState({
      contrastVal: value,
    });
  };

  handleSaturationUpdate = (value) => {
    this.setState({
      saturationVal: value,
    });
  }


  render() {
    return ( 
      <div>
        <Stage
          width={window.innerWidth / 2}
          height={window.innerHeight / 2}
        >
          <Layer>
            <ImageViewer 
            contrast={this.state.contrastVal}
            saturation={this.state.saturationVal}
            fileUrl={this.state.fileUrl} />
          </Layer>
        </Stage>
        <ImageControls
          contrastVal={this.state.contrastVal}
          handleContrastUpdate={this.handleContrastUpdate}

          saturationVal={this.state.saturationVal}
          handleSaturationUpdate={this.handleSaturationUpdate}

          handleUpload={this.handleUpload}
        />
      </div>
    );
  }
}

export default Filter;
