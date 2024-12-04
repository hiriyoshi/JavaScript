import React from "react";

const MoodBoard = ({ moods }) => (
  <div className="mood-board">
    {moods.map((mood) => (
      <div key={mood._id} className="mood-item">
        <img src={mood.imageUrl} alt="Mood" />
        <p>{mood.caption}</p>
      </div>
    ))}
  </div>
);

export default MoodBoard;
