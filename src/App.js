import "./App.css";
import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Shirt", quantity: 12, packed: true },
  { id: 4, description: "Jeans", quantity: 12, packed: false },
  { id: 5, description: "Glass", quantity: 12, packed: true },
];

function App() {
  const [items, setItems] = useState(initialItems);
  //const numitem = items.length;

  function HandleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function HandleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function HandleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function HandleClear() {
    const confirm = window.confirm("Are you ready to clear all list !!!!!!!!!");
    if (confirm) setItems([]);
  }
  return (
    <div className="app">
      <Logo></Logo>
      <Form onAddItem={HandleAddItem}></Form>
      <PackingList
        items={items}
        onDeleteItem={HandleDelete}
        onToggle={HandleToggle}
        onClear={HandleClear}
      ></PackingList>
      <Stats items={items}></Stats>
    </div>
  );
}

export default App;
