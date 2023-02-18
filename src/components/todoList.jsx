import React, { Component } from "react";
import AddTodo from "./addTodo";
import AddTodoUs from "./addtodous";
import Todo from "./todo";

class TodoList extends Component {
  state = {
    todoList: [
      { id: 1, content: "Buy milk" },
      { id: 2, content: "Buy bread" },
    ],
  };

  handleDel = (tlId) => {
    const list = this.state.todoList.filter((tl) => {
      return tl.id !== tlId;
    });
    this.setState({ todoList: list });
  };

  handleAdd = (todos) => {
    todos.id = Math.random();
    const list = [...this.state.todoList, todos];
    this.setState({ todoList: list });
  };

  render() {
    return (
      <div className="container center">
        <h3 className="light-blue-text text-darken-2 ">Todo's</h3>
        <Todo todolist={this.state.todoList} onDel={this.handleDel} />

        <AddTodoUs onAdd={this.handleAdd} />
      </div>
    );
  }
}

export default TodoList;
