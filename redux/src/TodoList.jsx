import React, { Component } from "react";

import {
  getHandleInputChange,
  getHandleButtonClick,
  getHandleDeleteItem,
  getTodoList,
} from "./store/actionCreators";
import "antd/dist/antd.css";
import TodoListUI from "./TodoListUI";
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

  componentDidMount() {
    const action = getTodoList();
    store.dispatch(action);
    // axios.get("/api/list.json").then((res) => {
    //   let data = res.data;
    //   const action = getInitListData(data);
    //   store.dispatch(action);
    // });
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleButtonClick={this.handleButtonClick}
        list={this.state.list}
        handleDeleteItem={this.handleDeleteItem}
      />
    );
  }

  handleInputChange(e) {
    const action = getHandleInputChange(e.target.value);

    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleButtonClick = () => {
    const action = getHandleButtonClick();

    store.dispatch(action);
  };

  handleDeleteItem = (index) => {
    const action = getHandleDeleteItem(index);

    store.dispatch(action);
  };
}

export default TodoList;
