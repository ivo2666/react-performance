import { Profiler, useState } from "react";
import Header from "../components/header";
import { expensiveCalculation } from "../utils/expensiveCalculation";

export function UslessRendering({handleRender}) {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const calculation = expensiveCalculation(count);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setItems((t) => [...t, "New Item"]);
  };

  return (
    <Profiler id="unless-rendering" onRender={handleRender}>
      <div>
        <Header
          title="Unless Rendering"
          link="Good Performance"
          href="/useless-renders-opt"
        />
        <div>
          <h2>My Items</h2>
          {items.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
          <button onClick={addTodo}>Add Item</button>
        </div>
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>  + </button>
          <h2>Sub Component With Expensive Calculation</h2>
          {calculation}
        </div>
      </div>
      </Profiler>
  );
}
