import React, { Component} from "react";
import tree1 from "./Assets/preview-brightness.png";
import tree2 from "./Assets/preview-bw.png";
import tree3 from "./Assets/preview-hue.png";
import tree4 from "./Assets/preview-saturation.png";
import "./preview.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

class Preview extends Component {
  state = {
    index: 0,
    picList: [tree1, tree2, tree3, tree4],
  };

  onClickNext = () => {
    if (this.state.index + 1 === this.state.picList.length) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState({
        index: this.state.index + 1,
      });
    }
  };
  onClickPrevious = () => {
    if (this.state.index - 1 === -1) {
      this.setState({
        index: this.state.picList.length - 1,
      });
    } else {
      this.setState({
        index: this.state.index - 1,
      });
    }
  };
  render() {
    return (
      <div>
        <img className="images" src={this.state.picList[this.state.index]} />
        {""}
        <br />
        <button className="button" style={{ fontSize: "18px" }} onClick={this.onClickPrevious}>
          {""}
          Previous{""}
        </button>
        <button className="button"
          style={{ "margin-left": "5px", fontSize: "18px" }}
          onClick={this.onClickNext}
        >
          {""}
          Next{""}
        </button>
      </div>
    );
  }
}
export default Preview;
