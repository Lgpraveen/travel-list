export function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  if (!items.length) {
    return (
      <p className="stats">
        <em>start adding some items in your packing list 🚀</em>
      </p>
    );
  }

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you got everything! Ready to Go✈️"
          : `you have ${numItems} items in your list,and tou already packed ${numPacked} items(${percentage}%)`}
      </em>
    </footer>
  );
}
