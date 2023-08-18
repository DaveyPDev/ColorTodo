import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, task]);
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <NewTodoForm addTodo={addTodo} />
      <div className="todos-container">
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            <span className="trash-button">
              <FontAwesomeIcon icon="trash" onClick={() => removeTodo(index)} />
            </span>
            <span className="task-text">{todo}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
