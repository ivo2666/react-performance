import { useEffect, useState, Profiler } from "react";
import { FixedSizeList as List } from "react-window";

import "./styles.css";
import Header from "../components/header";

export function LongListGoodPerf({ handleRender }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((data) => data.json())
      .then(setItems)
      .catch(console.log);
  }, []);

  const Row = ({ index, style}) => {
    const item = items[index];
    return (
      <div style={style} key={item?.id} >
        <div className="item">
        <h4>name: {item?.name}</h4>
        <div>email: {item?.email}</div>
        <p>{item?.body}</p>
        </div>
      </div>
    );
  };

  return (
    <Profiler id="longListGood" onRender={handleRender}>
      <div className="long_list">
      <Header title="Virtualize Long Lists" link="Bad Performance" href="/long-list_bad-perf"/>
            <List
              className="list"
              height={800}
              width={"100%"}
              itemCount={items?.length}
              itemSize={200}
            >
              {Row}
            </List>
      </div>
    </Profiler>
  );
}
