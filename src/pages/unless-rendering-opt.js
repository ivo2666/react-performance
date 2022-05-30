import React, { Profiler, useEffect, useState } from 'react'
import Header from '../components/header';
import { expensiveCalculation } from '../utils/expensiveCalculation';

export default function UnlessRenderingOpt({handleRender}) {
    const [count, setCount] = useState(0);
    const [items, setItems] = useState([]);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
      setCalculation(expensiveCalculation(count))
    }, [count])
  
    const increment = () => {
      setCount((c) => c + 1);
    };
    const addTodo = () => {
      setItems((t) => [...t, {text: "New Item", id: new Date().getMilliseconds()}]);
    };
  
    return (
      <Profiler id="unless-rendering-opt" onRender={handleRender}>
      <div>
          <Header title="Unless Rendering Opt" link="Bad Performance" href="/useless-renders" />
        <div>
          <h2>My Items</h2>
          {items.map(todo => {
            return <p key={todo?.id}>{todo?.text}</p>;
          })}
          <button onClick={addTodo}>Add Item</button>
        </div>
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
          <h2>Sub Component With Expensive Calculation</h2>
          {calculation ? calculation : "loading..."}
        </div>
      </div>
      </Profiler>
    );
}
