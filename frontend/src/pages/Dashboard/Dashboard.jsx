// frontend/src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [foods, setFoods] = useState([]);
  const [meals, setMeals] = useState([]);
  const [newFood, setNewFood] = useState({
    name: "",
    calories: "",
    protein: "",
    carbs: "",
    fats: "",
  });
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchFoods();
    fetchMeals();
  }, []);

  const fetchFoods = async () => {
    const response = await fetch(
      "https://dietpal-backend.herokuapp.com/api/foods",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    setFoods(data);
  };

  const fetchMeals = async () => {
    const response = await fetch(
      "https://dietpal-backend.herokuapp.com/api/meals",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    setMeals(data);
  };

  const handleFoodChange = (e) => {
    setNewFood({ ...newFood, [e.target.name]: e.target.value });
  };

  const addFood = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://dietpal-backend.herokuapp.com/api/foods",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newFood),
      }
    );
    if (response.ok) fetchFoods();
  };

  const inviteFriend = () => {
    const shareText =
      "Join me on DietPal! Start tracking your meals today: https://dietpal.com";
    navigator.clipboard.writeText(shareText);
    alert("Invite link copied to clipboard!");
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <h2>Add Food</h2>
      <form onSubmit={addFood}>
        <input
          type="text"
          name="name"
          placeholder="Food Name"
          onChange={handleFoodChange}
          required
        />
        <input
          type="number"
          name="calories"
          placeholder="Calories"
          onChange={handleFoodChange}
          required
        />
        <input
          type="number"
          name="protein"
          placeholder="Protein"
          onChange={handleFoodChange}
          required
        />
        <input
          type="number"
          name="carbs"
          placeholder="Carbs"
          onChange={handleFoodChange}
          required
        />
        <input
          type="number"
          name="fats"
          placeholder="Fats"
          onChange={handleFoodChange}
          required
        />
        <button type="submit">Add Food</button>
      </form>

      <h2>Foods List</h2>
      <ul>
        {foods.map((food) => (
          <li key={food._id}>
            {food.name} - {food.calories} kcal
          </li>
        ))}
      </ul>

      <h2>Meals List</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal._id}>
            {meal.name} - {meal.totalCalories} kcal
          </li>
        ))}
      </ul>

      <button
        onClick={inviteFriend}
        style={{
          marginTop: "20px",
          padding: "10px",
          backgroundColor: "#FFD700",
          color: "#3E2723",
          fontWeight: "bold",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Invite a Friend
      </button>
    </div>
  );
};

export default Dashboard;
