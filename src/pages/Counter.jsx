import React, { memo } from 'react'

 function Counter({countValue, onClick}) {
    console.log("This function is renderd", countValue)
  return (
    <>
    <p>{countValue}</p>
      <button onClick={onClick}>Click</button>
    </>
  )
}

export default memo(Counter)
