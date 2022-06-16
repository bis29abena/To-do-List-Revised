import React, { useState } from "react";
import List from "./List";

function App() {
  const [text, setText] = useState("");
  const [add, setAdd] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setText(value);
  }

  function addList() {
    setAdd((previousItem) => {
      return [...previousItem, text];
    });

    setText("");
  }

  function deleteItem(id) {
    console.log(id);
    setAdd((previousItem) => {
      return previousItem.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={text} onChange={handleChange} type="text" />
        <button onClick={addList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {add.map((item, index) => (
            <List key={index} id={index} name={item} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
