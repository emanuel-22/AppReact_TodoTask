import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

import './App.css';

function App() {
  return (
    // Esta es la estructura de componentes de App
    <div className="App">

      <TodoCounter />
      <TodoSearch />

      <TodoList >
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      {/* <CreateTodoButton/> */}
      
    </div>
  );
}




export default App;
