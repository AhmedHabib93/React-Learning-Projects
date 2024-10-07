export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const precentage = Math.round((packedItems * 100) / numItems);
  return (
    <footer className="stats">
      <em>
        {precentage === 100
          ? "you got everything! Ready to go ✈️"
          : ` 💼 You have ${numItems} items on yor list, and you already packed
          ${packedItems} (${precentage}%)`}
      </em>
    </footer>
  );
}
