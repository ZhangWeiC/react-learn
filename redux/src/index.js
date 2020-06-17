import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList.jsx";
import store from "./store";

const App = <TodoList />;

ReactDOM.render(App, document.getElementById("root"));
