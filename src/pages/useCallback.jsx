import React from 'react'
import { useState } from 'react'
import Counter from './Counter'
import { useCallback } from 'react'
export default function UseCallback() {
    const [countone, setCountOne] = useState(0)
    const [counttwo, setCountTwo] = useState(0)
    const memorizeSetCountOneFunc = useCallback(() => {
        setCountOne((prevCount)=> prevCount + 1), [countone]
    })
    const memorizeSetCountTwoFunc = useCallback(() => {
        setCountTwo((prevCount)=> prevCount + 1), [counttwo]
    })
  return (
    <div>
      <h1>useCallback</h1>
      <Counter countValue={countone} onClick={memorizeSetCountOneFunc}></Counter>
      <Counter countValue={counttwo} onClick={memorizeSetCountTwoFunc}></Counter>
    </div>
  )
}
