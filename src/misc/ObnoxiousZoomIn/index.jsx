import React from "react";
import classNames from "classnames";
import styles from "./styles.scss";

export default class ObnoxiousZoomIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = { zoom: false };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ zoom: true }), 100);
  }

  render() {
    return (
      <div
        className={classNames(styles.zoomInit, {
          [styles.zoom]: this.state.zoom
        })}
      >
        {this.props.children}
      </div>
    );
  }
}
