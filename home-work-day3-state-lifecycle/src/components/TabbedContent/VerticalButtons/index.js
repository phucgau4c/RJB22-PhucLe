import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from "./VerticalButtons.module.scss";

const cx = classNames.bind(styles);

class VerticalButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
      title: `LET'S TALK TABS`,
    };
  }

  render() {
    const datas = [
      {
        name: "HISTORY",
        title: `LET'S TALK TABS`,
        content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.

          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?`,
      },
      {
        name: "APPROACH",
        title: "COOL TABS",
        content: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.`,
      },
      {
        name: "CULTURE",
        title: "SHORTER TABS",
        content: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.`,
      },
      {
        name: "METHOD",
        title: "LONGER TABS",
        content: `Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.`,
      },
    ];

    return (
      <div className={cx("wrapper")}>
        <div className={cx("button-content")}>
          <div className={cx("button-list")}>
            {datas.map((data, index) => (
              <button
                key={index}
                className={cx("button-item")}
                onClick={() => {
                  this.setState({ content: data.content, title: data.title });
                }}
                style={{
                  color: this.state.content === data.content && "#fff",
                  backgroundColor:
                    this.state.content === data.content && "#47b475",
                }}
              >
                {data.name}
              </button>
            ))}
          </div>
          <div className={cx("title")}>
            <h4>{this.state.title}</h4>
            <p className={cx("content")}>{this.state.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

VerticalButtons.propTypes = {};

export default VerticalButtons;
