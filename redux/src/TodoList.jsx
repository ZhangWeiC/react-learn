import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store";

/* const Data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
]; */

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <Fragment>
        <div>
          <Input
            placeholder="输入..."
            style={{
              width: "300px",
              margin: "10px",
            }}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          ></Input>{" "}
          <Button type="primary" onClick={this.handleButtonClick}>
            提交
          </Button>
        </div>
        <List
          bordered
          style={{
            width: "300px",
            margin: "10px",
          }}
          dataSource={this.state.list}
          renderItem={(item) => <List.Item> {item} </List.Item>}
        />
      </Fragment>
    );
  }

  handleInputChange(e) {
    const action = {
      type: "change_input_value",
      value: e.target.value,
    };

    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleButtonClick = () => {
    const action = {
      type: "add_todo_item",
    };

    store.dispatch(action);
  };
}

export default TodoList;
