import React, { useState, useEffect } from 'react'
import MotionNavigation from './navbar';
import Navigation from './navbar';
import Tagline from './tagline.component';
import ButtonState from './stateButtons';
import {motion, AnimatePresence} from 'framer-motion'
import useAuth from '../hooks/useAuth';


// struct data{
// email: string
// role: string
// gender: string
// mobile: string
// fullName: string
// }


const Profile = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [data, setData] = useState({});
    const { email, setEmail } = useAuth();
    const [name, setName] = useState("Good Day, user!");
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar);
      console.log("Rerendering!")
    };


    useEffect(() =>{
        const request = fetch("http://localhost:8080/client/list")
        .then((response) => {
            if(response.ok){
               setData(response.json());
                setName(data.find((item) => item.email === email).fullName);
            }
            else 
                throw new Error("ошибка в получении данных")
        })
        .catch(err => console.log(err.status))
    
    }
    , [])

     return(
        <>
        <header>
            <img className = "prf-img" src="/footerProfile.svg" alt= "logo"></img>
        </header>
        <main className = "main prf-main">
            <img src="/profileAvatar.svg" alt="profile image"></img>
            {/* <h1 className="prf-h1">John Smith</h1> */}
            <h1 className="prf-h1">{name}</h1>

            {/* <Tagline className = "tagline" text= "Insert tagline here"></Tagline> */}
            <button className ="get-nav" onClick={handleShowNavbar}></button>
            {/* <AnimatePresence 
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}      
            > */}
            <AnimatePresence
            initiate = {{x: 0, opacity: 0}}
            animate= {{x: 180, opacity: 1}}
            exit= {{x: 0, opacity: 0}}
            transition = {{duration: 10}}
            >
            {showNavbar &&
                <motion.div>
                        <Navigation showNavbar = {showNavbar} setShowNavbar = {setShowNavbar}/>
                </motion.div>
            }
            </AnimatePresence>
            
            <p>Welcome! Using this page toy can access all required tools needed for onboarding. You can also<br /> access any notes from our meetings together and even access a record of advertissing reports.</p>
            <h2>The Roadmap</h2>
            {/* <button class="prf-btn prf-btn-1"></button> */}
            <ButtonState text = {"progress text"}></ButtonState>
            {/* <button class="prf-btn prf-btn-2"></button>
            <button class="prf-btn prf-btn-3"></button> */}
        </main>
        <footer></footer>
        </>
     );
    }

    export default Profile;