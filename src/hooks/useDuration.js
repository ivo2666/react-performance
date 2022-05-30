import { useState } from "react"

const useDuration = () => {
    const [lastId, setLastId] = useState("")
    const [durations, setDurations] = useState([]);
  
     const handleRender = (
          id, // the "id" prop of the Profiler tree that has just committed
          phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
          actualDuration, // time spent rendering the committed update
          baseDuration, // estimated time to render the entire subtree without memoization
          startTime, // when React began rendering this update
          commitTime, // when React committed this update
          interactions // the Set of interactions belonging to this update
      ) => {
        if (phase !== "nested-update") {
          setDurations(durations => {
            const newDuration = {phase, actualDuration: actualDuration.toFixed(2)};
            if(id !== lastId) {
              setLastId(id)
             return [newDuration] 
            }
            return [...durations, newDuration]
          })
        }
      }

      return {
          durations,
          handleRender
      }
}

export default useDuration;
