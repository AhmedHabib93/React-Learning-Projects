import { useState } from "react";
import Input from "./Input";
import "./styles.css";
import List from "./List";

export default function App() {
  const [todo, setTodo] = useState([]);
  return (
    <div className="flex flex-col  w-fit mx-auto p-6 gap-2 bg-yellow-100 h-fit rounded-lg my-4">
      <Input todo={todo} setTodo={setTodo} />
      {todo.length <= 0 ? (
        <p className="flex flex-col py-4 gap-1 justify-start text-center text-slate-500">
          Start adding your tasks... 👇🏻
        </p>
      ) : (
        <List todo={todo} setTodo={setTodo} />
      )}
    </div>
  );
}
