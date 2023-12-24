import InnerPage from '../components/innerpages.component.js'
import React, { useEffect, useState } from 'react';

const MeetingNotesPage = () => {
    const [showNavBar, setShowNavBar] = useState(false);
    
    const handleShowNavBar = () => {
      setShowNavBar(!showNavBar);
    };
  
  
    const [userData, setUserData] = useState([]);
  
    useEffect(() => {
      // Выполнение запроса при монтировании компонента
      fetch('http://localhost:8080/note/useful-info')
        .then(response => response.json())
        .then(data => {
           setUserData(data);
        })
        .catch(error => {
          console.error('Ошибка получения данных:', error);
        });
    }, []);
  
    return (
      <>
       <InnerPage hed = "Meeting Notes" logoimg = "/meetingNotes.svg" p = "Notes from meeting" /> 
      </>
    );
  };
  
  export default MeetingNotesPage;