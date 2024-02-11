import React, { Component, useState, useEffect } from 'react';
import {Router, Link} from 'react-router-dom';
import useAuth from '../hooks/useAuth.js';
import {useNavigate, useLocation} from 'react-router-dom';

const Login = () => {
 
    const { isAuthenticated, setAuth } = useAuth();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    let form = {};
    let formData = {};

    function handleSubmit(e) {
      
      e.preventDefault();
      
      form = e.target;
      formData = new FormData(form);
      console.log(form);
      const formJson = Object.fromEntries(formData.entries());
      console.log(formJson);
      console.log("isAuthenticated: ", isAuthenticated, "setAuth()):", setAuth);
      
      
    }
    function handleClick(){
      try{
        const response = fetch('http://localhost:8080/auth/sign-in', { method: form.method, body: formData })
      .then(responce => {
        if(responce.ok){
          console.log("yes");
        } else{
         throw new Error("ошибка в отправке данных")
        }})
        .catch(error => {
          console.log("ошибка")
          setAuth(true);
          navigate(from, { replace: true });
          navigate("/profile");
        })
       } 
        catch (error){
        console.log("ошибка")
        }
      }

    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={'/sign-in'}>
          <img className = "logo" src = "/logo_bad.svg" alt = "logo"></img>
        </Link>
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
            <li>
              {/* <Link className = "nav-link" to={'/profile'}>
                Profile
              </Link> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className="auth-wrapper">
      <div className="auth-inner">
      {/* <form method = "Post" onSubmit = {handleSubmit}> */}
      <form className = "logReg-form" method="post" onSubmit={handleSubmit}>
        <h3>SIGN IN</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name = "email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name = "password"
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" onClick={handleClick}  className="btn btn-primary">
            Login
          </button>
        </div>
        {/* <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p> */}
      </form>
      </div>
    </div>
    </div>

    )
  }

export default Login;
