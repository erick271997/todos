import React, { useState } from "react";

const Todo = ({ item, onUpdate, onDelete }) => {
  const [isEdit, setIsedit] = useState(false);

  function FormEdit() {



    const[newValue, setNnewValue]= useState(item.title);
    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChange(e) {
      const value = e.target.value;
      setNnewValue(value);
    }

    function handleClickUpdateTodo(){
        onUpdate(item.id, newValue);
        setIsedit(false)
    }
    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input type="text" className="todoInput" onChange={handleChange} value={newValue}/>
        <button className="button" onClick={handleClickUpdateTodo}>Update</button>
      </form>
    );
  }
  function TodoElement() {
    return (
      <div className="todoInfo">
        <span className=".todoTitle "> {item.title}</span>
        <button className="button" onClick={() => setIsedit(true)}>edit</button>
        <button className="buttonDelete" onClick={(e)=>onDelete(item.id)}>Delete</button>
      </div>
    );
  }
  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
};

export default Todo;
