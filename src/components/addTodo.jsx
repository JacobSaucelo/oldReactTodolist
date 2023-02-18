import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: "",
  };

  handleChange = (e) => {
    this.setState({ content: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state);
    this.setState({ content: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field col s6">
            <input
              type="text"
              value={this.state.content}
              onChange={this.handleChange}
            />
            <label>Add new todo.</label>
            <button className="waves-effect waves-light light-blue darken-2 btn">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTodo;
