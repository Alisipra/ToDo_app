import React, { useState } from "react";

export default function TodoListItems({ value, index, todo, setTodo }) {
  let delRow = () => {
    let finalData = todo.filter((v, i) => {
      return i !== index;
    });
    setTodo(finalData);
  };
  let [status, setStatus] = useState(false);
  let checkStatus = () => {
    setStatus(!status);
  };
  return (
    <div>
      <li className={status ? "completedTask" : ""} onClick={checkStatus}>
        {value}
        <span onClick={delRow}>&times;</span>
      </li>
    </div>
  );
}
