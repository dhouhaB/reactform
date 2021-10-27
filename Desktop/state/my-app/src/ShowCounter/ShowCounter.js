import React, { Component } from "react";
import Counter from "../Counter/Counter";

class ShowCounter extends Component {
  state = {
    show: false,
  };

  render() {
    return (
      <div>
        <button className="btnshow" onClick={() => this.setState({ show: !this.state.show })}>
          Show
        </button>
        {this.state.show ? <Counter /> : null}
      </div>
    );
  }
}

export default ShowCounter;
