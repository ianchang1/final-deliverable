import { useState } from "react";
import Table from "./components/table";
import "./App.css";

function App() {
  return (
    <>
      <div className="background">
        <h1 className="title">Adopt Dogs Here!</h1>
      </div>
      <Table />
      <button>Add Dog</button>
    </>
  );
}

export default App;
