import "./filter.css";
import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom"; 
import Konva from "konva";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";

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
      image={image}
      width= {400}
      height= {300}
      filters={[Konva.Filters.HSV, Konva.Filters.Brighten, Konva.Filters.saturation]} 
      saturation={props.saturation / 100}
      brightness={props.brightness / 100}
      value={props.contrast / 100}

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

  handleBrightSlider = (event) => {
    this.props.handleBrightnessUpdate((event.target.value - 50) * 2);
  };

  render() {
    return (
      <div>

        <p>Contrast: {this.props.contrastVal}</p>
        <input type="range" onChange={(event) => this.handleContSlider(event)} />

        <p>Saturation: {this.props.saturationVal}</p>
        <input type="range" onChange={(event) => this.handleSatSlider(event)} />

        <p>Brightness: {this.props.brightnessVal} </p>
        <input type="range" onChange={(event) => this.handleBrightSlider(event)}/>
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
    brightnessVal: 0,
    fileUrl: new URL("data:image/png;base64,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"),
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
  handleBrightnessUpdate = (value) => {
    this.setState({
      brightnessVal: value,
    });
  }


  render() {
    return ( 
      <div className="image-div">
        <div className="image-render">
          <Stage
            width={400}
            height={350}
          >
            <Layer>
              <ImageViewer
              contrast={this.state.contrastVal}
              saturation={this.state.saturationVal}
              brightness={this.state.brightnessVal}
              fileUrl={this.state.fileUrl} />
            </Layer>
          </Stage>
        </div>
        <div className="ic">
          <ImageControls 
            contrastVal={this.state.contrastVal}
            handleContrastUpdate={this.handleContrastUpdate}

            saturationVal={this.state.saturationVal}
            handleSaturationUpdate={this.handleSaturationUpdate}

            brightnessVal={this.state.brightnessVal}
            handleBrightnessUpdate={this.handleBrightnessUpdate}

            handleUpload={this.handleUpload}
          />
        </div>
      </div>
    );
  }
}

export default Filter;
