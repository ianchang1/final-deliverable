import React, { useEffect, useState } from "react";
import "../App.css";

const Table = () => {
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
    <div className="background">
      <table border="4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Breed</th>
          </tr>
        </thead>
        <tbody>
          {dogs.map((dog) => (
            <tr key={dog.id}>
              <td>{dog.name}</td>
              <td>{dog.age}</td>
              <td>{dog.breed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
