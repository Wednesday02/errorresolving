import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import "./add.css";
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const Add = () => {
    const users= {
        fname:"",
        lname:"",
        email:"",
        password:""
    }

    
    const [user,setUser]=useState(users);
    const navigate=useNavigate();
    const inputHandler=(e)=>
    {
        const {name,value} =e.target;
         setUser({...user,[name]:value});
        
    }
    const submitForm=async(e)=>
    {
        e.preventDefault();
       await axios.post("https://abc-p46c.onrender.com/api/create",user)
       .then((response)=>
       {
        toast.success(response.data.msg ,{position:'top-right'})
        navigate("/")
       }
       ).catch((error)=>console.log(error))
    }
  return (
    <div className='addUser'>
        <Link to={"/"}>Back</Link>
        <h3>Add new user</h3>
        <form className='adduserform ' onSubmit={submitForm}>
            <div className='inputGroup'>
            <label htmlFor='fname'>First Name</label>
            <input type='text' name='fname' onChange={inputHandler} id='fname' autoComplete='off' placeholder='First Name'/>
            </div>

            <div className='inputGroup'>
            <label htmlFor='lname'>Last Name</label>
            <input type='text' name='lname' onChange={inputHandler} id='lname' autoComplete='off' placeholder='Last Name'/>
            </div>

            <div className='inputGroup'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email'  onChange={inputHandler} id='email' autoComplete='off' placeholder='Email Address'/>
            </div>

            <div className='inputGroup'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password'  onChange={inputHandler} id='password' autoComplete='off' placeholder='Enter Your Password'/>
            </div>

            <div className='inputGroup'>
            <button type='submit'>Add User</button>

            </div>
        </form>
    </div>
  )
}


export default Add