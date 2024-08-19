import { useState } from "react";
import "./App.css";
import TodoListItems from "./TodoListItems";
function App() {
  let [todo, setTodo] = useState([]);
  
  const saveItems = (event) => {
    event.preventDefault();
    let todoVal = event.target.todoVal.value;
    if (!todo.includes(todoVal)) {
      let finalTodoList = [...todo, todoVal];
      setTodo(finalTodoList);
      event.target.todoVal.value = "";
    } else {
      alert("ToDo is already exists");
    }
  };
  let list = todo.map((v, i) => {
    return (
      <TodoListItems
        value={v}
        key={i}
        index={i}
        todo={todo}
        setTodo={setTodo}
      />
    );
  });

  return (
    <>
      <div className="container">
        <h1>ToDo List</h1>
        <form onSubmit={saveItems}>
          <input type="text" name="todoVal" />
          <button>Save</button>
          <div className="divItem">
            <ul>{list}</ul>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
