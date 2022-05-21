import React, { useState, useEffect } from "react";

const Card = () => {
  const [thingsLearned, setThingsLearned] = useState([]);

  useEffect(() => {
    fetch("https://cyf-learnings.glitch.me/coding")
      .then((res) => res.json())
      .then((data) => setThingsLearned(data));
  }, []);

  return (
    <div className="container">
      {thingsLearned.map((item, index) => {
        return (
          <div key={index} className="card">
            <h1>{item.fullName}</h1>
            <p>{item.ideas}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
