function List({ todo, setTodo }) {
  return (
    <div className="flex flex-col gap-8 items-center justify-between ">
      <ul className="flex flex-col py-4 gap-1 justify-start w-full">
        {todo.map((item, index) => (
          <Item key={index} item={item} setTodo={setTodo} todo={todo} />
        ))}
      </ul>
      <button
        className="px-3 py-1 w-fit  bg-red-500 hover:bg-red-600 text-gray-100 font-bold rounded "
        onClick={() => setTodo([])}
      >
        Clear
      </button>
    </div>
  );
}

export default List;

function Item({ item, setTodo }) {
  function handleDeleteItem(insertedItem) {
    setTodo((items) => items.filter((item) => item !== insertedItem));
  }
  return (
    <li className="flex justify-between border rounded-lg px-4 py-1 bg-white ">
      <p>{item}</p>
      <button onClick={() => handleDeleteItem(item)}>❌</button>
    </li>
  );
}
