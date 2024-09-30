import React from 'react'

export default function ReactHookForm() {
  return (
    <>
      <h1>React Hook Form</h1>
      <form action="">
        <div>
        <label htmlFor="">Email</label>
        <input type="email" name='email'/>
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" name='password'/>
        </div>
        <button type="submit">Subbmit</button>
      </form>
    </>
  )
}
