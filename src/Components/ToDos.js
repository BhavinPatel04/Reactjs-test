import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

class ToDos extends Component {
  toDoItems;
  render() {
    this.getToDoItems();

    return (
      <div className="ToDos">
        <h3>My React ToDos</h3>
        <div>{this.toDoItems}</div>
      </div>
    );
  }

  getToDoItems() {
    if(this.props.toDos) {
      this.toDoItems = this.props.toDos.map(toDo=>{
        return (
          <ToDoItem key={toDo.title} 
              toDo={toDo}/>
        );
      });
    }
  };
}

ToDos.propTypes = {
  toDos: PropTypes.array
}

export default ToDos;
