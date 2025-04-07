import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm(){
  const {
    addTodo,
    setOpenModal
  } = React.useContext(TodoContext);

  //creamos un estado local, no global
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event)=>{
    event.preventDefault(); //evitamos recargar la pagina
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = ()=>{
    setOpenModal(false);
  };

  const onChange = (event)=>{
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo ToDo</label>
      <textarea
        placeholder="Escribe aqui el texto"
        value = {newTodoValue}
        onChange = {onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Agregar
        </button>
      </div>
    </form>
  )  
}

export { TodoForm };