import React, { Component } from "react";
import "../assets/css/todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Task 1", "Task 2", "Task 3"],
    };
  }

  addHandle(event) {
    this.setState({
      list: [...this.state.list, document.getElementById("inputTask").value],
    });
  }

  deleteHandle(id) {

    // let newToDo = delete this.state.list["id.id"];
    var tempList = this.state.list;
    tempList.forEach((task, i) => {
      if (i === id.id) {
        tempList.splice(i, 1);
      }
    });
    this.setState({
      list: tempList,
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
              onClick={() => this.addHandle()}
            />
          </form>
          <hr />
        </div>
        <div className="listTodo">
          <ul>
            {this.state.list.map((task, id) => {
              return (
                <li key={id}>
                  {task} -
                  <input
                    type="button"
                    value="Delete Task"
                    onClick={() => this.deleteHandle({ id })}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Todo;
