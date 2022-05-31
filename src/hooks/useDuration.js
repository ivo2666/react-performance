import { useState } from "react"
let renderId = 0;

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
        // console.log(`id: ${id}`)
          // console.log(`phase: ${phase}`)
          // console.log(`actualDuration: ${actualDuration}`)
          // console.log(`baseDuration: ${baseDuration}`)
          // console.log(`startTime: ${startTime}`)
          // console.log(`commitTime: ${commitTime}`)
          // console.log(`interactions : ${interactions }`)
        if (phase !== "nested-update") {
          setDurations(durations => {
            const newDuration = {id: renderId, phase, actualDuration: actualDuration.toFixed(2)};
            renderId++
            if(id !== lastId) {
              setLastId(id)
             return [newDuration] 
            }

            if (durations.length > 4) {
              return [...durations.slice(0, 4), newDuration]
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
