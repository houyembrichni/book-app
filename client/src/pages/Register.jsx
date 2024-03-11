import React,{useState} from 'react'
 import { Form, Link } from "react-router-dom";
 import './Register.css'
 import axios from "axios";
 
 
  
function Register() {
  const [userRegister, setUserRegister]  =useState()
    const handlelRegister = (e) => {
      e.preventDefault();
      axios.post("http://localhost:5000/api/auth/register", 
      userRegister).then((res)=>console.log(res.data)).catch((e)=>console.log(e))
    }
    console.log(userRegister);
  return (
    <div className="container-Register">
      <div className="Register">
        <div className="from">
          <h1>Sign up </h1>
          <form onSubmit={handlelRegister}>
            <input
              type="Your Name"
              onChange={(e) =>
                setUserRegister({ ...userRegister, Yourname: e.target.value })
              }
              placeholder="Your Name"
            />
            <input
              type="Your Email"
              onChange={(e) =>
                setUserRegister({ ...userRegister, Youremail: e.target.value })
              }
              placeholder="Your Email"
            />
            <input
              type="password"
              onChange={(e) =>
                setUserRegister({ ...userRegister, password: e.target.value })
              }
              placeholder="password"
            />
            <button type=" submit"> Register</button>
          </form>
        </div>
        <div className="image">
          <img
            src="https://smartgoweb.com/storage/sign-in-01.png"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

export default Register;