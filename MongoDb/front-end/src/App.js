import React, { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  // State to hold items fetched from the backend
  const [items, setItems] = useState([]);
  // State to hold a new item's data
  const [newItem, setNewItem] = useState({ name: "", quantity: 0 });
  // State to manage loading and error
  const [error, setError] = useState(null);

  // Fetch items from the backed on component mount
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/items");
        setItems(response.data); // Updare state with fetched items
      } catch (err) {
        console.error("Error fetching items:", err.message);
      }
    };
    fetchItems();
  }, []);
  // Function to handle adding a new item
  const addItem = async () => {
    try {
      if (newItem.name.trim()) {
        const response = await axios.post(
          "http://localhost:5000/items",
          newItem
        );
        setItems([...items, response.data]); // Add the new item to the list
        setNewItem({ name: "", quantity: 0 }); // Reset the input fields
      } else {
        alert("Item name cannot be empty.");
      }
    } catch (err) {
      console.error("Error adding item:", err.message);
      setError("Failed to add item. Check if the backend is running.");
    }
  };
  // Render the UI
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>React + MongoDB Atlas</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <input
          type="text"
          placeholder="Item Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          style={{ marginRight: "10px" }}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) =>
            setNewItem({ ...newItem, quantity: parseInt(e.target.value) })
          }
          style={{ marginRight: "10px" }}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
