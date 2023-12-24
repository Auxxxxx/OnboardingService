import React, { Component } from 'react';
import {Router, Link} from 'react-router-dom';

const Login = () => {
    function handleClick() {
      window.location.assign('/profile');
      // alert("OnClick!");  //без этого не присходи переход на новую страницу
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
      <form className = "logReg-form">
        <h3>SIGN IN</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
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
          <button type="submit" className="btn btn-primary" onClick = {handleClick}>
            Login
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
      </div>
    </div>
    </div>

    )
  }

export default Login;
