"use client";
import { useState } from "react";

const Contact = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleAdd = () => {
    setTasks([...tasks, inputValue]);
    setInputValue("");
  };

  const handleRemove = (index) => {
    const newTask = tasks.filter((_, i) => i !== index);
    setTasks(newTask);
  };

  return (
    <>
      <h1 className="text-center text-3xl my-4 font-bold">To-Do</h1>
      <div className="flex justify-center mt-20">
        <input
          type="text"
          name="task"
          placeholder="Enter a task"
          value={inputValue}
          onChange={handleInputValue}
        />
        <button className="bg-black text-white px-4" onClick={handleAdd}>
          Add
        </button>
      </div>
      <div className="flex justify-center mt-20">
        <ul className="list-disc list-inside mt-4 ">
          {tasks.map((task, index) => (
            <li key={index} className="flex justify-center items-center">
              {task}
              <button
                className="text-white mx-10 px-2 py-1 bg-red-500"
                onClick={() => handleRemove(index)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Contact;
