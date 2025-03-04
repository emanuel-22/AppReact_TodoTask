import './CreateTodoButton.css';

function CreateTodoButton() {
  return (
    <button 
      className="CreateTodoButton" 
      onClick={(event) => console.log('le diste click')}
    >+</button>
  );
}

export { CreateTodoButton };
