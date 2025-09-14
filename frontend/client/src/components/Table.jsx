import React from "react";
import "../App.css";

const Table = () => {
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
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Table;
