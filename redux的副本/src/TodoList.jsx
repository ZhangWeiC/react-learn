import React, { Component } from "react";
import store from "./store";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  render() {
    return (
      <div>
        <input value={this.state.inputValue} />
        <button>点击</button>
        <ul>
          <li>44444</li>
        </ul>
      </div>
    );
  }
}

export default TodoList;
