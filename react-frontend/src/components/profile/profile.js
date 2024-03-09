import React, { useState, useEffect } from "react";
import MotionNavigation from "../navbar.js";
import Navigation from "../navbar.js";
import Tagline from "../tagline.component.js";
import ButtonState from "./stateButtons.js";
import { motion, AnimatePresence } from "framer-motion";
import useAuth from "../../hooks/useAuth.js";
import {URL} from "../../constants.js"

// struct data{
// email: string
// role: string
// gender: string
// mobile: string
// fullName: string
// }

const Profile = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [data, setData] = useState({activeStage: 0, onboardingStages: ""});
  const { email, setEmail } = useAuth();
  const [name, setName] = useState("user");

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
    console.log("Rerendering!");
  };

  useEffect(() => {
    const request = fetch(`http://${URL}/client/get-data/${email}`, {
      method: "get",
      // body: JSON.stringify({'email': email}),
      // // '{ "email": "' + email + '" }',
      // headers: {
      //   "Content-Type": "application/json",
      // },
    })
      .then((response) => {
        console.log(response);
        response.text().then(function(result) {
            let obj = JSON.parse(result);
            setData(obj)
            setName(obj.fullName)
            // console.log(data.activeStage)
        });
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("client:", data)
  return (
    <>
      <header>
        <img className="prf-img" src="/footerProfile.svg" alt="logo"></img>
      </header>
      <main className="main prf-main">
        <img src="/profileAvatar.svg" alt="profile image" alt="profile"></img>
        {/* <h1 className="prf-h1">John Smith</h1> */}
        <h1 className="prf-h1">{"Good Day, dear " + name + "!"}</h1>

        {/* <Tagline className = "tagline" text= "Insert tagline here"></Tagline> */}
        <button className="get-nav" onClick={handleShowNavbar}></button>
        {/* <AnimatePresence 
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}      
            > */}
        <AnimatePresence
          initiate={{ x: 0, opacity: 0 }}
          animate={{ x: 180, opacity: 1 }}
          exit={{ x: 0, opacity: 0 }}
          transition={{ duration: 10 }}
        >
          {showNavbar && (
            <motion.div>
              <Navigation
                showNavbar={showNavbar}
                setShowNavbar={setShowNavbar}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <p>
          Welcome! Using this page toy can access all required tools needed for
          onboarding. You can also
          <br /> access any notes from our meetings together and even access a
          record of advertissing reports.
        </p>
        <h2>The Roadmap</h2>
        {/* <button class="prf-btn prf-btn-1"></button> */}
        <ButtonState status={"progress text"} stageData ={{
          status: data?.onboardingStages, 
          // status: "Hello", 
          stage: data.activeStage,
          // stage: 3

          }}></ButtonState>
      </main>
      <footer></footer>
    </>
  );
};

export default Profile;
