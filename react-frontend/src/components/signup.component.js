import React, { Component, useState } from 'react';
import {Router, Link} from 'react-router-dom';

const SignUp = () => {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
  
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch('http://localhost:8080//auth/register', { method: form.method, body: formData });
    
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    window.location.assign('/profile');
  
  }
   
    //Second way^
//     // Prevent the browser from reloading the page
// e.preventDefault();

// // Read the form data
// const form = e.target;
// const formData = new FormData(form);

// // You can pass formData as a fetch body directly:
// fetch('http://localhost:8080/client/data', { method: form.method, body: formData })
// .then(response => {
// if (!response.ok) {
// throw new Error('Error in sending data');
// }
// const formJson = Object.fromEntries(formData.entries());
// console.log(formJson);
// window.location.assign('/profile');
// })
// .catch(error => {
// console.error(error);
// // Display error message to the user
// alert('Error in sending data');
// });

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
            {/* <li>
              <Link className = "nav-link" to={'/profile'}>
                Profile
              </Link>
            </li> */}
          </ul>
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
            required
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control"
           placeholder="Last name"
           name = "lastName"
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

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
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
              <label className = "signup-label" for="huey">male</label>
              <input type="radio" name="sex" value="femal" />
              <label for="dewey">female</label>

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
