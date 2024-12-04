import React, { useState } from "react";
import axios from "axios";

const MoodForm = ({ onMoodAdded }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/moods", {
        imageUrl,
        caption,
      });
      onMoodAdded(response.data);
      setImageUrl("");
      setCaption("");
    } catch (error) {
      console.error("Error adding mood:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        required
      />
      <button type="submit">Submit Mood</button>
    </form>
  );
};

export default MoodForm;

