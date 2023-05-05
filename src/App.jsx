import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenido al proyecto de Martin Costa Daddato"} />
    </div>
  );
}

export default App;
