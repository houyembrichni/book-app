import React ,{useState} from "react";
import { Form, Link } from "react-router-dom"; 
import axios from "axios";
function Login() {
  const [userlogin,setUserlogin]=useState()
  const handlelogin = (e) => {
    e.preventDefault();
      axios.post("http://localhost:5000/api/auth/login", 
        userlogin).then((res)=>console.log(res.data)).catch((e)=>console.log(e))}
  return (
    <div className="container-login">
      <div className="login">
        <div className="image">
          <img
            src="https://cdn.pixabay.com/photo/2020/06/07/10/29/landscape-5269757_1280.jpg"
            width={300}
            height={300}
            alt=""
          />
        </div>
        <div className="from">
          <h1> Hello!</h1>
          <h2> Good Morning </h2>
          <p> Login Your account</p>
          <form>
            <input
              type="email"
              onChange={(e) =>
                setUserlogin({ ...userlogin, Youremail: e.target.value })
              }
              placeholder="email"
            />
            <input
              type="password"
              onChange={(e) =>
                setUserlogin({ ...userlogin, password: e.target.value })
              }
              placeholder="password"
            />
            <button type="submit" onClick={handlelogin }>
              {" "}
              Login
            </button>
          </form>
          <Link to="/register">Create Account </Link>
        </div>
      </div>
    </div>
  );
  }
export default Login;
