export default function Durations({durations}) {

  return (
      <div className='durations' >
      {durations?.map(duration => (
        <div
            className="duration_cont"
            key={duration?.id}
            style={{ color: duration?.actualDuration < 10 ? "green" : "red" }}
          >
            {`${duration?.phase} duration: ${duration?.actualDuration}ms`}
          </div>
      ))}
      
      </div>
  )
}
