import React, { useEffect, useState } from 'react';
import Navigation from './navbar.js';
import NotesList from './noteLits.js';
import MediaList from './mediaList';
import OnboardingList from './onboardingList';
import ContactList from './contactList';
import UsefulInfoList from './usefullInfoList';
// import ManageL from './ListScroll.tsx'
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
  const id = parseInt(useParams().id);
  console.log("note id:")
  console.log(id)
  // const id = 1;
  const [text, setText] = useState("");
  const [note, setNote] = useState("");

  
  useEffect(()=>{
    // console.log(id);
    // console.log(data);
    const temp = data.find((item) => (item.id === id))
    console.log(temp)
    setNote(temp);
    setText((temp.content).join(""))


    console.log("NOTE:")
    console.log(note)
    // console.log(text)
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
      <div className="inner-wrapper-note">
        <div>
        {/* <img className="inner-img" src="../../public/meetingNotes.svg" /> */}
        <h2 class = "pages-h2 inner-h2 " >{note.header}</h2>
        </div>
        <button className="user-btn-back" onClick={handleBack}></button>
        <button className ="inner-get-nav-note" onClick={handleShowNavbar}></button>
              {showNavbar &&
              <Navigation showNavbar = {showNavbar} setShowNavbar = {setShowNavbar} />}
        </div>

        <p class = "notes-p" >{text}</p>
        
       

  </div>
  </main>
  );
};

export default InnerNote;