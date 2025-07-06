import React from "react";
import "../App.css";

const Rating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(i <= rating ? "⭐" : "☆");
  }

  return <div className="rating">{stars.join(" ")}</div>;
};

export default Rating;
