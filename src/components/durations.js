import React from 'react'

export default function Durations({durations}) {
  return (
      <>
      {durations?.map(duration => (
        <div
            className="duration_cont"
            key={JSON.stringify(duration)}
            style={{ color: duration?.actualDuration < 10 ? "green" : "red" }}
          >
            {`${duration?.phase} duration: ${duration?.actualDuration}ms`}
          </div>
      ))}
      
      </>
  )
}
