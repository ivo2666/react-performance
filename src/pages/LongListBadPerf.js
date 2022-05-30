import { useEffect, useState, Profiler } from 'react';
import Header from '../components/header';
import './styles.css'

export function LongListBadPerf({handleRender}) {
    const [items, setItems] = useState([])

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/comments")
      .then(data => data.json())
      .then(setItems)
      .catch(console.log)
    }, [])

    const list = items.map(item => (
        <div key={item?.id} className="item">
            <h4>name: {item?.name}</h4>
            <div>email: {item?.email}</div>
            <p>{item?.body}</p>
        </div>
    ))
    
    return (
      <Profiler id="longListBad" onRender={handleRender}>
          <div className='long_list'>
          <Header title="Virtualize Long Lists" link="Good Performance" href="/long-list_good-perf" />
          <ul className='list'>
            {list}  
          </ul>
      </div>
    </Profiler>
    );
  }