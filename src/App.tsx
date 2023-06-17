import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Hola gente que tal como estamos</div>
      <button onClick={() => setCount(count + 1)}>Incrementar {count}</button>
    </>
  );
}

export default App;
