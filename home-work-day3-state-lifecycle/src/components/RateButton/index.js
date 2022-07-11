import React, { Component } from "react";
import { AiFillStar } from "react-icons/ai";

class RateButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      star: null,
    };
  }

  render() {
    return (
      <div>
        {[...Array(5)].map((star, index) => {
          const rating = index + 1;

          return (
            <label key={index}>
              <input
                style={{ display: "none" }}
                type="radio"
                value={rating}
                onClick={() => this.setState({ star: rating })}
              ></input>

              <AiFillStar
                color={rating <= this.state.star ? "#f1c40f" : "#95a5a6"}
                size={100}
              ></AiFillStar>
            </label>
          );
        })}
      </div>
    );
  }
}

RateButton.propTypes = {};

export default RateButton;
