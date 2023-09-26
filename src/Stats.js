export default function Stats({ items }) {
  const numItem = items.length;
  const numpacked = items.filter((item) => item.packed).length;
  const itempackpercentage = Math.round((numpacked / numItem) * 100);
  if (!items.length) {
    return (
      <footer className="stats">
        <p>
          <em>Start addintg item and packing list🚀🚀🚀 </em>
        </p>
      </footer>
    );
  }
  return (
    <footer className="stats">
      <em>
        {itempackpercentage === 100
          ? `You got everything  redy to ✈️`
          : `💼You have ${numItem} items and you already packed ${numpacked} ${" "} ${itempackpercentage}%`}
      </em>
    </footer>
  );
}
