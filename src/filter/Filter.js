
import './filter.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Image } from 'react-konva';
import Konva from 'konva';
import useImage from 'use-image';


class Filter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          file: null 
        }
        this.handleChange = this.handleChange.bind(this);
      }
      
      handleChange(event) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
      }



    render() {
        return ( 
                <div className="filter-screen-container">                        

                    <div class="contrast">
                        <input class="input1" type="file" onChange={this.handleChange}/>
                        <img src={this.state.file} alt="upload image"/>

                        <Stage width="400px" height="400px">
                            <Layer>
                                <FilterImage file={this.state.file}/>
                            </Layer>
                        </Stage>
                    </div>


                </div>

        );
    }
}



const FilterImage = (file) => {
    const [image] = useImage(file, 'Anonimus'); // 
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
  
    return (
      <Image
        ref={imageRef}
        x={10}
        y={10}
        image={image}
        filters={[Konva.Filters.Blur]}
        blurRadius={10}
      />
    );
  };



export default Filter;