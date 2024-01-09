import React, { useState } from "react";
import Profile from './profile.component';


const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isExit, setExit] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };
 
  const email = props.email;
  // const toogleExit = () => {
  //    setExit();
  // }


  return (
    <>{ isOpen &&
      <Profile />}
        if (isOpen){
        <div className = "overlay"></div>
        }
        <div className="navigation">
          <div class ="nav-top" >
          <h2 class="nav-h2">Navigation</h2> 
          <button className = "nav-exit" onClick = {toggleNavigation}></button>

          </div>
          <ul className="nav-ul">
            <li class = "prf-ul">
            <img class= "nav-li-img mar-l" src="/onboarding.svg" al="contact"></img>
              <a class = "nav-li ob1" href="/">OnBoarding</a></li>
            <li>
            <img class= "nav-li-img mar-l" src="/mediaAssert.svg" al="contact"></img>
              <a class = "nav-li ob1" href="/media">Media Asserts</a></li>
            <li>
              <img class= "nav-li-img mar-l" src="/PainAdvertisingRemotes.svg" al="contact"></img>
              <a class = "nav-li ob2" href="/">Paid Advertising Reports</a></li>
            <li>
              <img class= "nav-li-img" src="/meetingNotes.svg" al="contact"></img>
              <a class = "nav-li ob3" href="/">Meeting Notes</a></li>
            <li>
              <img class= "nav-li-img usfinfo" src="/usefulinfo.svg" al="contact"></img>
              <a class = "nav-li ob4" href="/usefulinfo">Useful Information</a></li>
            <li>
              <img class= "nav-li-img" src="/clientContact.svg" al="contact"></img>
              <a class = "nav-li ob5" href="/contacts">Client Contact Details</a></li>
              </ul>
        </div>
        </>
  );
};

export default Navigation;