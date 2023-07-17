import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Lobby from "./components/Lobby";
import Room from "./components/Room";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </section>
  );
}

export default App;
