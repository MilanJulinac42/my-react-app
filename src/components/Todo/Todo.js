import React, { Component } from "react";
import uuidv4 from "uuid/v4";
import "./Todo.css";
import List from "./List";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
      items: []
    };
  }

  componentWillMount() {
    this.setState({
      items: [
        {
          id: uuidv4(),
          task: "Pay the rent",
          completed: false
        },
        {
          id: uuidv4(),
          task: "Go to the gym",
          completed: false
        },
        {
          id: uuidv4(),
          task: "Do my homework",
          completed: false
        }
      ]
    });
  }

  handleOnChange = e => {
    this.setState({
      task: e.target.value
    });
  };

  markAsCompleted = id => {
    const foundTask = this.state.items.find(task => task.id === id);

    foundTask.completed = true;

    this.setState({ items: [...this.state.items] });
  };

  removeTask = id => {
    const filteredTasks = this.state.items.filter(task => task.id !== id);
    this.setState({
      items: filteredTasks
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();

    if (this.state.task.trim() !== "") {
      this.setState({
        task: "",
        items: [
          ...this.state.items,
          {
            id: uuidv4(),
            task: this.state.task,
            completed: false
          }
        ]
      });
    }
  };

  render() {
    return (
      <div className="Todo">
        <h1>New Task:</h1>
        <form onSubmit={this.handleOnSubmit}>
          <input value={this.state.task} onChange={this.handleOnChange} />
        </form>
        <List
          items={this.state.items}
          markAsCompleted={this.markAsCompleted}
          removeTask={this.removeTask}
        />
      </div>
    );
  }
}

export default Todo;
