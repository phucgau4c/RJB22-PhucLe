import React, { Component } from "react";
import PropTypes from "prop-types";

class ButtonOneAtATime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      para: "",
    };
  }

  render() {
    const contents = this.props.contents;
    return (
      <>
        <div>ButtonOneAtATime</div>
        {contents.map((content, index) => (
          <div key={index}>
            <button
              onClick={() => {
                this.setState({ para: content.para, index: index });
              }}
            >
              {content.name}
            </button>
            <p>{this.state.index === index && this.state.para}</p>
          </div>
        ))}
      </>
    );
  }
}

ButtonOneAtATime.propTypes = {};

export default ButtonOneAtATime;
