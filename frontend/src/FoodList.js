// Displays food items fetched from backend API

import React, { useEffect, useState } from "react";

function FoodList() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Food Menu</h2>

      {foods.length === 0 ? (
        <p>No food items available</p>
      ) : (
        foods.map((food) => (
          <div
            key={food._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "8px"
            }}
          >
            <h3>{food.name}</h3>
            <p><strong>Category:</strong> {food.category}</p>
            <p><strong>Price:</strong> ${food.price}</p>
            <p><strong>Description:</strong> {food.description}</p>
            <p><strong>Available:</strong> {food.available ? "Yes" : "No"}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default FoodList;