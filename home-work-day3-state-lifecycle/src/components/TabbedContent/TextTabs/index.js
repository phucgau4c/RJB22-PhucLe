import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from "./TexTabs.module.scss";

const cx = classNames.bind(styles);

class TextTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    };
  }

  render() {
    const datas = [
      {
        name: "HISTORY",
        content:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
      },
      {
        name: "APPROACH",
        content:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
      },
      {
        name: "CULTURE",
        content:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.",
      },
      {
        name: "METHOD",
        content:
          "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
      },
    ];

    return (
      <div className={cx("wrapper")}>
        <div className={cx("button-list")}>
          {datas.map((data, index) => (
            <button
              key={index}
              className={cx("button-item")}
              onClick={() => {
                this.setState({ content: data.content });
              }}
              style={{
                color: this.state.content === data.content && "#47b475",
                borderBottom:
                  this.state.content === data.content && "1px solid #47b475",
              }}
            >
              {data.name}
            </button>
          ))}
        </div>
        <p className={cx("content")}>{this.state.content}</p>
      </div>
    );
  }
}

TextTabs.propTypes = {};

export default TextTabs;
