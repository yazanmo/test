import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import "./signUp.css";

export default function Signup() {

        const [fullName, setFullName] = useState("")
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [show, setShow] = useState(false);
        const [message, setMessage] = useState("");
        const [state1, setState1] = useState(false);
        const history = useHistory();

        const signUpButton = (e) => {
            e.preventDefault();
            axios
              .post(`http://localhost:5000/signup`, {
                fullName,
                email,
                password,
              })
              .then((result) => {
                setState1(false);
              })
              .catch((err) => {
                setState1(true);
                setShow(true);
                setMessage(err.response.data);
              });
          };

    return (
      <div className="login-box">
        <div className='form'>
        <h1>Sign up</h1>
        <br></br>
          <input
            type="text"
            placeholder=" Full Name "
            required
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder=" Email "
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder=" Password "
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
<button className="signup" onClick={signUpButton}>signup</button>    
      {state1 ? (
            <div
              style={{
                margin: "0 auto",
                color: "red",
                width: "300px",
                textAlign: "center",
                fontSize: "22px",
              }}
            >
              email is exist
            </div>
          ) : (
            ""
          )}
  <p>
          {" "}
          Do not have an account ?
          <span>
            <Link className="render" to="/login">
              {" "}
              Log in
            </Link>
          </span>
        </p>{" "}
       
      </div>
   
   
       
        </div>
    )
}
