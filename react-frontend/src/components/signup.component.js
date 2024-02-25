import React, { Component, useState } from 'react';
import {Router, Link, useNavigate, useLocation} from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import {URL} from "../constants.js"

const SignUp = () => {
  const { isAuthenticated, setAuth } = useAuth();
  const { email, setEmail } = useAuth();

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  let form = {};
  let formData = {};


  const [isEmailAlreadyIs, setEmailAlreadyIs] = useState(false);

   function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    form = e.target;
    formData = new FormData(form);
    const formJson = JSON.stringify(Object.fromEntries(formData.entries()));

    const requestData = { email: formData.get('email'),
      password: formData.get('password'),
      fullName: formData.get('name') + formData.get('lastName')
    };
     console.log(JSON.stringify(requestData))
    
    const response = fetch(`http://${URL}/auth/register`, { 
      // mode: 'no-cors', 
      method: form.method,
       body: JSON.stringify(requestData),
       headers: {
        // Accept: 'application/json',
        "Content-Type": "application/json",
      }
     })
    .then(responce => {
      if(responce.status === 409) {setEmailAlreadyIs(true);}
      else if(responce.ok){
        console.log("yes");

        setEmail(JSON.parse(formJson).email);
        console.log(email);

        setAuth(true);
        navigate(from, { replace: true });
        navigate("/profile");

      } else{
       throw new Error("ошибка в отправке данных")
      }})
      .catch(error => {

        //обходной путь без логина:
        //setAuth(true);
        //console.log("isAuthenticated: ", isAuthenticated);
        //navigate(from, { replace: true });
      })
    //console.log(formJson);
    // setAuth(true);
    // // console.log("isAuthenticated: ", isAuthenticated, "setAuth()):", setAuth);
    // navigate(from, { replace: true });
    // navigate("/profile");

  }


    return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        {/* <Link className="navbar-brand" to={'/sign-in'}>
        <img className = "logo" src = "/logo_bad.svg" alt = "logo"></img>
        </Link> */}
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={'/sign-in'}>
                LOGIN
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/sign-up'}>
                SIGN UP
              </Link>
            </li>
            {/* <li>
              <Link className = "nav-link" to={'/profile'}>
                Profile
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="container-2">
        <div className="h1-logo">
          GLASFLAIR
          {/* <img src="/public/logo/logo_tint_white.svg" alt="logo"/> */}
        </div>
        </div>
      </div>
    </nav>

    <div className="auth-wrapper">
      <div className="auth-inner">
      <form method="post" onSubmit={handleSubmit} className = "logReg-form">
        <h3>SIGN UP</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            name = "name"
            autoComplete="first-name"
            required
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control"
           placeholder="Last name"
           name = "lastName"
           autoComplete="second-name"
           required
             />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input


            type="email"
            className="form-control"
            placeholder="Enter email"
            name = "email"
            required
          />
        </div>
        {isEmailAlreadyIs && <p class="auth-error-padding">Account with this email already exit</p>}

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            required
          />
        </div>

        <div className="mb-3">
          <label>Mobile</label>
          <input
            type="mobile"
            className="form-control"
            placeholder="Enter mobile"
            name = "mobile"
            required
          />
        </div>

            <fieldset className = "genderList" >
              <legend>Gender</legend>
              <input type="radio" name="sex" value="mal" checked/>
              <label className = "signup-label" htmlFor="huey">male</label>
              <input type="radio" name="sex" value="femal" />
              <label htmlFor="dewey">female</label>

            </fieldset>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
        <div>
          {/* <button onClick={() => fetch('http://localhost:8080/client/data', { method: "GET"})}></button> */}
        </div>
      </form>
      </div>
    </div>
    </div>

    )
  // }
}

export default SignUp;
