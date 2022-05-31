import React, {
  useState,
  memo,
  useCallback,
} from "react";
import Header from "../components/header";
import { expensiveCalculation } from "../utils/expensiveCalculation";
let id = 0;

const SubComponent = memo(({ count, increment }) => {
  const calculation = expensiveCalculation(count);
  return (
    <div>
      Count: {count}
      <button onClick={increment}>+</button>
      <h2>Sub Component With Expensive Calculation</h2>
      {calculation ? calculation : "...loading"}
    </div>
  );
});

export default function UnlessRenderingOpt() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);
  const addTodo = () => {
    setItems((t) => [...t, { text: "New Item", id: id }]);
    id++;
  };

  return (
    <div>
      <Header
        title="Unless Rendering Opt"
        link="Bad Performance"
        href="/useless-renders"
      />
      <div>
        <h2>My Items</h2>
        {items.map((todo) => {
          return <p key={todo?.id}>{todo?.text}</p>;
        })}
        <button onClick={addTodo}>Add Item</button>
        <span style={{ color: "green" }}>-- Check update duration</span>
      </div>
      <hr />
        <SubComponent
          count={count}
          increment={increment}
        />
    </div>
  );
}
