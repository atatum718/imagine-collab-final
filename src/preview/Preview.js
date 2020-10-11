import React, { Component } from "react";
import girl1 from "./Assets/girl1.jpg";
import girl2 from "./Assets/girl2.png";
import man1 from "./Assets/bruce.jpg";
import "./preview.css";

class Preview extends Component {
  state = {
    index: 0,
    picList: [girl1, girl2, man1],
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
        <img src={this.state.picList[this.state.index]} />
        {""}
        <br />
        <button style={{ fontSize: "18px" }} onClick={this.onClickPrevious}>
          {""}
          Previous{""}
        </button>
        <button
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
