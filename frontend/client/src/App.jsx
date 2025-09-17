import Table from "./components/table";
import Images from "./components/Images";
import { useState } from "react";
import "./App.css";

function App() {
  const [showImages, setShowImages] = useState(false);

  const showDogs = () => {
    setShowImages((prev) => !prev);
  };

  return (
    <>
      <div className="background">
        <h1 className="title">Adopt Dogs Here!</h1>
      </div>
      <Table />
      <button onClick={showDogs}>Show Dogs</button>
      {showImages && <Images />}
    </>
  );
}

export default App;
