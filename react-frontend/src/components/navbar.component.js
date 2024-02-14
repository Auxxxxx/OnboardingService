import React, { useState } from "react";
import Profile from './profile.component';
import {Link, useNavigate} from "react-router-dom"
import {motion} from "framer-motion"


const Navigation = (props) => {

  const email = props.email;
  const navigate = useNavigate();
  let isOpen = props.showNavbar;
  let setOpen = props.setShowNavbar; 


  return ( <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    // className=“navigation”
  >
         {
        isOpen ? ( 
        <>
       <div className="overlay" onClick = {() => setOpen(prev => !prev)}></div>
      
        <div className="navigation">

          <div className="nav-top" >
          <h3 className ="nav-h3">Navigation</h3> 
          <button className = "nav-exit" onClick = {() => setOpen(prev => !prev)}></button>
          </div>
          
          <ul className="nav-ul">
          
          <li className="nav-li-click" onClick ={() => navigate('/onboarding')}>
            <img className= "nav-li-img mar-l" src="/meetingNotes.svg" alt="contact"></img>
              {/* <a className = "nav-li ob1" href="/onboarding">OnBoarding</a></li> */}
              <Link className = "nav-li ob1" to="/onboarding">Onboarding</Link></li>
            
          <li className="nav-li-click" onClick ={() => navigate('/media')}>
            <img className= "nav-li-img mar-l nav-li-media" src="/mediaAssert.svg" alt ="contact"></img>
              {/* <a className = "nav-li ob1" href="/media">Media Asserts</a></li> */}
              <Link className = "nav-li ob1" to="/media">Media Asserts</Link></li>
          <li className="nav-li-click" onClick ={() => navigate('/reports')}>
              <img className = "nav-li-img mar-l" src="/reports.svg" alt ="contact"></img>
              {/* <a className = "nav-li ob2" href="/reports">Paid Advertising Reports</a></li> */}
              <Link className = "nav-li ob2" to="/reports">Paid Advertising Reports</Link></li>
      
              <li className="nav-li-click" onClick ={() => navigate('/notes')}>
              <img className = "nav-li-img nav-li-useful" src="/onboarding.svg" alt ="contact"></img>
              {/* <a className = "nav-li ob3" href="/notes">Meeting Notes</a></li> */}
              <Link className = "nav-li ob3" to="/notes">Meeting Notes</Link></li>

              <li className="nav-li-click" onClick ={() => navigate('/usefulinfo')}>
              <img className = "nav-li-img nav-li-meeting" src="/usefulinfo.svg" alt ="contact"></img>
              {/* <a className = "nav-li ob4" href="/usefulinfo">Useful Information</a></li> */}
              <Link className = "nav-li ob4" to="/usefulinfo">Useful Information</Link></li>
              
            <li className="nav-li-click" onClick ={() => navigate('/contacts')}>
              <img className= "nav-li-img nav-li-contact" src="/clientContact.svg" alt ="contact"></img>
              {/* <a className = "nav-li ob5" href="/contacts">Client Contact Details</a></li> */}
              <Link className = "nav-li ob5" to="/contacts">Client Contact Details</Link></li>
              </ul>
        </div>  
        </>) : null
     } 
     </motion.div>
  );
};

// const MotionNavigation = motion(Navigation);

// export default MotionNavigation;
export default Navigation;