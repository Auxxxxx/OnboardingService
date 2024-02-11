import React, { useEffect, useState } from 'react';
import Navigation from './navbar.component';
import NotesList from './noteList.component';
import MediaList from './mediaList';
import OnboardingList from './onboardingList';
import ContactList from './contactList.component';
import UsefulInfoList from './usefullInfoList';
import ManageL from './ListScroll.tsx'
// import '../styles/navbar.css'

const InnerPage = (props) => {
  const [showNavbar, setShowNavbar] = useState(false);
  
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };


  const [userData, setUserData] = useState([]);
  const email = props.email;



  // useEffect(() => {
  //   // Выполнение запроса при монтировании компонента
  //   fetch(`http://localhost:8080/note/useful-info?email=${email}`)
  //     .then(response => response.json())
  //     .then(data => {
  //        setUserData(data);
  //     })
  //     .catch(error => {
  //       console.error('Ошибка получения данных:', error);
  //     });
  // }, []);

  return (

    <main className = "main inner-main">
    <div class="inner-div">
      <div className="inner-wrapper">
        <img class = "inner-img" src= {props.logoimg} ></img>
        <div>
        <h2 class = "pages-h2 inner-h2 " >{props.hed}</h2>
        {props.class !== "notes-" &&   <p class = "inner-p" >{props.p}</p>
        }
        </div>
        <button className ="inner-get-nav" onClick={handleShowNavbar}></button>
              {showNavbar &&
              <Navigation showNavbar = {showNavbar} setShowNavbar = {setShowNavbar} />}
        </div>

        {props.class === "notes-" &&  <p class = "notes-p" >{props.p}</p>
        }
      
{/* 
        <p class = "inner-p" >{props.p}</p> */}
      {props.class === "notes" &&
      <NotesList class = {props.class} list = {props.list}/>
      }
      {props.class === "media" &&
        <MediaList class = {props.class} list = {props.list}/>
      }
      {props.class === "onboarding" &&
        <OnboardingList />
      }
      {props.class === "contacts" && <ContactList class = {props.class} list = {props.list}>

      </ContactList>

      }
      {props.class === "info" && <UsefulInfoList class = {props.class} list = {props.list}></UsefulInfoList>
      }
       


  </div>
  </main>
  );
};

export default InnerPage;