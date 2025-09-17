import React from "react";
import { useEffect, useState } from "react";
import "../App.css";

const Images = () => {
  const [dogs, setDogs] = useState([]);
  async function getAllDogs() {
    try {
      const res = await fetch("http://localhost:8080/dogs");
      const resJSON = await res.json();
      setDogs(resJSON);
    } catch (err) {
      console.error("Failed to fetch dogs:", err);
    }
  }

  useEffect(() => {
    getAllDogs();
  }, []);

  return (
    <div className="center-div">
      {dogs.map((dog, index) => (
        <div key={index} style={{ margin: "10px", textAlign: "center" }}>
          <img
            src={dog.image}
            alt={dog.name}
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "12px",
              display: "block", // ensures the <h1> is below
              marginBottom: "8px",
            }}
          />
          <h1 style={{ fontSize: "18px" }}>{dog.name}</h1>
        </div>
      ))}
    </div>
  );
};
export default Images;
