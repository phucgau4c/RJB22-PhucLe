import React, { Component } from "react";
import { AiFillHeart } from "react-icons/ai";

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: "red",
    };
  }

  render() {
    return (
      <div>
        <button
          style={{ backgroundColor: "#fff", border: "none" }}
          onClick={() => {
            this.state.check === "red"
              ? this.setState({ check: "#95a5a6" })
              : this.setState({ check: "red" });
          }}
        >
          <AiFillHeart style={{ color: this.state.check }}></AiFillHeart>
        </button>
      </div>
    );
  }
}

LikeButton.propTypes = {};

export default LikeButton;
