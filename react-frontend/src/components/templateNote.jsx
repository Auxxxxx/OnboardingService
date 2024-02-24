import React, { useEffect, useState } from 'react';
import Navigation from './navbar.js';
import NotesList from './noteLits.js';
import MediaList from './mediaList';
import OnboardingList from './onboardingList';
import ContactList from './contactList';
import UsefulInfoList from './usefullInfoList';
import ManageL from './ListScroll.tsx'
// import '../styles/navbar.css'
import {useNavigate, useParams} from "react-router-dom"
import useNotes from '../hooks/useNotes.js';


// type note{
// header: string
// content: ["324", "3242"]
// 
// 

const InnerNote = (props) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const {data, setData} = useNotes();
  // const id = useParams();
  const id = 1;
  const [text, setText] = useState("");
  
  useEffect(()=>{
    console.log(id);
    console.log(data);
    const temp = data.find((item) => (item.id === id))
    setData(temp);
    setText((temp.content).join(""))
  }, [])



  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/notes');
}

  return (

    <main className = "main inner-main">
    <div class="inner-div">
      <div className="inner-wrapper">
        <div>
        <h2 class = "pages-h2 inner-h2 " >{data.header}</h2>
        {props.class !== "notes-" &&   <p class = "inner-p" >{props.p}</p>
        }
        </div>
        <button className="user-btn-back" onClick={handleBack}></button>
        <button className ="inner-get-nav" onClick={handleShowNavbar}></button>
              {showNavbar &&
              <Navigation showNavbar = {showNavbar} setShowNavbar = {setShowNavbar} />}
        </div>

        {props.class === "notes-" &&  <p class = "notes-p" >{text}</p>
        }
       

  </div>
  </main>
  );
};

export default InnerNote;