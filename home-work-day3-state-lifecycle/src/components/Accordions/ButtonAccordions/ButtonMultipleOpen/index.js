import React, { Component } from "react";

class ButtonMultipleOpen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: "block",
      para: "",
      i: 0,
    };
  }

  render() {
    const contents = this.props.contents;
    return (
      <>
        <p>ButtonMultipleOpen</p>
        {contents.map((content, index) => (
          <div key={index}>
            <button
              onClick={() => {
                this.setState({ para: content.para, i: index });
                this.state.i === index && this.state.index === "block"
                  ? this.setState({ index: "none" })
                  : this.setState({ index: "block" });
              }}
            >
              {content.name}
            </button>
            <p style={{ display: this.state.index }}>
              {console.log(this.state.index)}
              {this.state.para}
            </p>
          </div>
        ))}
      </>
    );
  }
}

export default ButtonMultipleOpen;
