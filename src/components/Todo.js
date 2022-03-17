import React, { Component } from "react";
import "../assets/css/todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Task 1", "Task 2", "Task 3"],
    };
  }

  addTask(event) {
    this.setState({
      list: [...this.state.list, document.getElementById("inputTask").value],
    });
  }

  render() {
    return (
      <div className="Todo">
        {/* Componente TO DO */}
        <div className="formTodo">
          <form>
            <input
              type="text"
              placeholder="Please, write your task"
              id="inputTask"
            />
            <input
              type="button"
              value="Add Task"
              onClick={() => this.addTask()}
            />
          </form>
          <hr />
        </div>
        <div className="listTodo">
          <ul>
            {this.state.list.map((task, id) => {
              return <li key={id}>{task}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Todo;
