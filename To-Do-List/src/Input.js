import { useState } from "react";

function Input({ todo, setTodo }) {
  const [value, setValue] = useState("");

  function handleAddItem(e) {
    e.preventDefault();
    if (!value) return;
    setTodo([...todo, value]);
    setValue("");
  }
  return (
    <div className=" flex flex-col items-center  gap-2 ">
      <h2 className="text-xl font-bold">Add your To-does</h2>
      <form className="flex gap-4" onSubmit={handleAddItem}>
        <input
          autoFocus
          required
          type="text"
          className="px-3 py-1 border-2 rounded-lg outline-none"
          placeholder="what're you going to do ?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button className="px-3 bg-red-500 hover:bg-red-600 text-gray-100 text-sm font-bold rounded-lg ">
          Add
        </button>
      </form>
    </div>
  );
}

export default Input;
