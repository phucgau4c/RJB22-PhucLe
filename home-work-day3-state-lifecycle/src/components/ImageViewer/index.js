import React, { Component } from "react";
import classNames from "classnames/bind";
import pic1 from "../../assets/imgs/cover1.jpg";
import pic2 from "../../assets/imgs/home12.jpg";
import pic3 from "../../assets/imgs/home14.jpg";
import pic4 from "../../assets/imgs/cover5.jpg";
import pic5 from "../../assets/imgs/cover6.jpg";
import pic6 from "../../assets/imgs/home17.jpg";
import styles from "./ImageViewer.module.scss";

const cx = classNames.bind(styles);

class ImageViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      i: 0,
    };
  }

  render() {
    const pics = [pic1, pic2, pic3, pic4, pic5, pic6];
    return (
      <div className={cx("wrapper")}>
        <img className={cx("main-pics")} src={pics[this.state.i]} alt="a"></img>
        <button
          className={cx("btn-next")}
          onClick={() => {
            this.state.i === pics.length - 1
              ? this.setState({ i: 0 })
              : this.setState({ i: this.state.i + 1 });
          }}
        >
          next
        </button>
        <button
          className={cx("btn-prev")}
          onClick={() => {
            this.state.i === 0
              ? this.setState({ i: pics.length - 1 })
              : this.setState({ i: this.state.i - 1 });
          }}
        >
          Previous
        </button>

        <div className={cx("image-list")}>
          {pics.map((pic, index) => (
            <img
              className={cx("image-item")}
              key={index}
              src={pic}
              style={{
                border: `1px solid ${this.state.i === index ? "#000" : "#fff"}`,
              }}
              alt="img"
            ></img>
          ))}
        </div>
      </div>
    );
  }
}

ImageViewer.propTypes = {};

export default ImageViewer;
