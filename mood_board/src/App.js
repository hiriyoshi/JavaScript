import React, { useState, useEffect } from "react";
import axios from "axios";
import MoodForm from "./components/MoodBoard";
import MoodBoard from "./components/MoodForm";

const App = () => {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/moods");
        setMoods(response.data);
      } catch (error) {
        console.error("Error fetching moods:", error);
      }
    };
    fetchMoods();
  }, []);

  const addMood = (newMood) => {
    setMoods([...moods, newMood]);
  };

  return (
    <div className="App">
      <h1>Collaborative Mood Board</h1>
      <MoodForm onMoodAdded={addMood} />
      <MoodBoard moods={moods} />
    </div>
  );
};

export default App;
