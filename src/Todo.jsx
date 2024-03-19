import { useState } from "react";
import Buttons from "./Buttons";
function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      if (editIndex !== null) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = inputValue;
        setTodos(updatedTodos);

        setEditIndex(null);
      } else {
        setTodos([...todos, inputValue]);
      }
      setInputValue("");
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setInputValue(todos[index]);
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="main">
      <div className="todoContainer">
        <div>
          <h1>Todo List</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="inputField"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Please enter your todo's here"
            />
            <Buttons id="submit" type="submit" name="button" />
          </form>
          <ul className="listItem">
            {todos.map((todo, index) => (
              <li key={index}>
                <p>{todo}</p>

                <div>
                  <Buttons name="Edit" onClick={() => handleEdit(index)} />
                  <Buttons name="Delete" onClick={() => handleDelete(index)} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
