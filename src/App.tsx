import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <section>
        <form action="">
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </form>
        <button>Save</button>
        <button>Share</button>
      </section>
    </div>
  );
}

export default App;
