import React, { useState } from 'react'
import style from './form.module.css'


export default function FORM() {

  
  
  const[user,setUser]=useState({name:'', email:'', password:''})
  const{name,email,password}= user
  const handleNameChange =(e)=>{
    setUser({name:e.target.value,email,password});
  }
  const handleEmailChange = (e) => {
    setUser({ name,email: e.target.value,  password });
  }
  const handlePasswordChange = (e) => {
    setUser({ name, email, password: e.target.value });
  }
  const handleSubmitChange = (e) => {
    console.log("form is submited")
    console.log(user)
    e.preventDefault();
  }
  return (
    <div>
     <h1>Registration</h1>
      <form onSubmit={handleSubmitChange}>
        <div className={style.formGroup} >
          <label htmlFor='name'>Name:</label>
          <input type="text" id="name"value={name} onChange={handleNameChange} required />
      </div>
      

        <div className={style.formGroup} >
          <label htmlFor='email'>Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        </div>

        <div className={style.formGroup} >
          <label htmlFor='password'>Password:</label>
          <input type="password" id="Password" value={password} onChange={handlePasswordChange} required />
       </div>

        <div className={style.formGroup}>
          <button type="submit" >Register</button>
       </div>

     </form>
    </div>
  )
}
