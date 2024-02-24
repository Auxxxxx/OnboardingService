import React, { Component, useState, useEffect } from 'react';
import {Router, Link} from 'react-router-dom';
import useAuth from '../hooks/useAuth.js';
import {useNavigate, useLocation} from 'react-router-dom';
import {URL} from "../constants.js"

const Login = () => {
 
    const { isAuthenticated, setAuth } = useAuth();
    const { email, setEmail } = useAuth();
    const [isErrorPassword, setErrorPassword] = useState(false);
    const [isNotFound, setNotFound] = useState(false);


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
      // const formJson = Object.fromEntries(formData.entries());
      const formJson = JSON.stringify(Object.fromEntries(formData.entries()));
      console.log(formJson);
      console.log(typeof(formData));

        const response = fetch(`http://${URL}/auth/sign-in`, { 
          // mode: 'no-cors',
           method: form.method, 
        body: formJson,
        headers: {
          // Accept: 'application/json',
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
        }
      
      })
      .then(responce => {
        if(responce.status === 404){
          console.log('Ошибка 404: Ресурс не найден');
          setNotFound(true);

        }else if(responce.status === 401){
          console.log('Ошибка 401: Неверный пароль');
          setErrorPassword(true);
        }


        else if(responce.ok){
          console.log("yes");
          setAuth(true);
          
          setEmail(JSON.parse(formJson).email);
          console.log(email);

          navigate(from, { replace: true });
          navigate("/profile");
        
        }
        
        else{
         throw new Error("ошибка в отправке данных")
        }})
        .catch(error => {
          console.error('Произошла ошибка: ' + error.message);

          // setEmail(JSON.parse(formJson).email);
          // console.log(email);
          // setAuth(true);
          // navigate(from, { replace: true });
          // navigate("/profile");
        })
      //  } 


      // setAuth(true);
      // console.log("isAuthenticated: ", isAuthenticated, "setAuth()):", setAuth);
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
            <li>
              
            </li>
          </ul>
          
        </div>
        <div className="container-2">
        <div className="h1-logo">GLASFLAIR</div>
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
            autoComplete="username"
            required
          />
          {isNotFound && <p class="auth-error">User with such email is not found</p>}
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name = "password"
            autoComplete="password"
            required

          />
          {isErrorPassword && <p class="auth-error">Wrong password</p>}

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
          <button type="submit" className="btn btn-primary">
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
