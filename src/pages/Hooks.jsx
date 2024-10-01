import React, { useEffect } from 'react'
import { useRef } from 'react'
export default function Hooks() {
    const currentValue = React.useRef(0)
    const divElementRef = useRef()
    const inputElementRef = useRef()
    function handkeClick(){
        currentValue.current++
        console.log(currentValue.current)
        
    }
    useEffect(() => {
        const getDivRefference = divElementRef.current
        getDivRefference.style.color = "red"
        setTimeout(() => {
            getDivRefference.style.color = "green"
        },2000)
        const getInputRefference = inputElementRef.current
        getInputRefference.focus()
        console.log(getDivRefference)
    },[])
  return (
    <>
      <h1>Use Ref , Use Call Back and Use memo</h1>
      <button onClick={handkeClick}>Click me</button>
      <div ref={divElementRef}>
        Some random element
      </div>
      <input ref={inputElementRef} type="text" name='name' placeholder='Enter your name' />
    </>
  )
}
