import React from 'react'
import { useForm } from 'react-hook-form'
export default function ReactHookForm() {
  const {register, handleSubmit, formState: {errors}, reset} = useForm()
  function onSubmitForm(formData){
    console.log(formData)
    reset()
  }
  return (
    <>
      <h1>React Hook Form</h1>
      <form action="" onSubmit={handleSubmit(onSubmitForm)}>
        <div>
        <label htmlFor="">Email</label>
        <input {...register("email", {required: true})} type="email" name='email'/>
        {
          errors.email && errors.email.type === "required" ?( <span style={{color: "red", fontSize: "16px", fontWeight: "bold", marginBottom: "10px"}}>This field is required</span>) : null
        }
        </div> 
        <div>
          <label htmlFor="">Password</label>
          <input {...register("password", {required: true, minLength: 6})} type="password" name='password'/>
          {
            errors.password && errors.password.type === "required" ? (<span style={{color: "red", fontSize: "16px", fontWeight: "bold", marginBottom: "10px"}}>This field is required</span>) : null
          }
          { 
            errors.password && errors.password.type === "minLength" ? (<span style={{color: "red", fontSize: "16px", fontWeight: "bold", marginBottom: "10px"}}>Password must be at least 6 characters</span>) : null
          }
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
