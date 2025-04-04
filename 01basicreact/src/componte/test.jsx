import React from "react";

const data2 = ["box1", "box2", "box3", "box4", "box5"];

const Test = () => {
  return (
    <div className="container">
      {data2.map((item, index) => (
        <div key={index} className="card">
          <h2>{item}</h2>
          <p>Card {index + 1}</p>
          
        </div>
      ))}
    </div>
  );
};

export default Test;
