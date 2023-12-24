import React, { useState } from 'react'
import Navigation from './navbar.component';
import Tagline from './tagline.component';


const Profile = () => {
    const [showNavBar, setShowNavBar] = useState(false);
  
    const handleShowNavBar = () => {
      setShowNavBar(!showNavBar);
    };

     return(
        <>
        <header>
            <img NameClass = "prf-img" src="/footerProfile.svg" alt= "logo"></img>
        </header>
        <main className = "main prf-main">
            <h1>New User</h1>
            <img src="/profileAvatar.svg" alt="profile image"></img>
            <Tagline className = "tagline" text= "Insert tagline here"></Tagline>
            <button className ="get-nav" onClick={handleShowNavBar}></button>
            {showNavBar &&
             <Navigation />}
        
            <p>Welcome! Using this page toy can access all required tools needed for onboarding. You can also<br /> access any notes from our meetings together and even access a record of advertissing reports.</p>
            <h2>The Roadmap</h2>
            <button class="prf-btn prf-btn-1"></button>
            <button class="prf-btn prf-btn-2"></button>
            <button class="prf-btn prf-btn-3"></button>
        </main>
        <footer></footer>
        </>
     );
    }

    export default Profile;
