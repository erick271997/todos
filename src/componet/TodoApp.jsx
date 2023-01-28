import React, { useState } from "react";
import Todo from "./todo";
import './estilos./todoApp.css';
import './estilos./index.css';

const TodoApp = () => {
  const [title, setTitle] = useState("hola");
  const [todos, setTodos] = useState([]);

  function handleChange(event) {
    // esto es para que te deje escribir
    const value = event.target.value;

    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    const temp = [...todos];
    temp.unshift(newTodo);
    setTodos(temp);

    setTitle('')
    // Para cuando escribamos quede limpio
  }

  function handleUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp);
  }

  function handleDelete(id) {
    const temp = todos.filter((item) => item.id !== id);

    setTodos(temp); 
  }
 

  return (
    <di className='encabezado'>
      Aqui va el encabezado 
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input type='lay' onChange={handleChange} className="todoInput" value={title} />
        <input
          onClick={handleSubmit}
          type="submit"
          value="Create todo"
          className="buttonCreate"
        />
      </form>
      <div className="todosContainer">
        {todos.map((item) => (
          <Todo
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div> 
     </di>
  );
};

export default TodoApp;
