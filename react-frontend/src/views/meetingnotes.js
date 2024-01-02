import InnerPage from '../components/innerpages.component.jsx'
import React, { useEffect, useState } from 'react';

const MeetingNotesPage = () => {
    const [showNavBar, setShowNavBar] = useState(false);
    
    const handleShowNavBar = () => {
      setShowNavBar(!showNavBar);
    };
  
  
    const [userData, setUserData] = useState([]);
      const ExampleData = [{
        "date": "14.12.23",
        "name": "Call designer",
        "text": "Call tomorrow designer"
      },
        {
          "date": "10.12.23",
          "name": "Goals",
          "text": "make notes about your business goals"
        },
        {
          "date": "08.12.23",
          "name": "General tags",
          "text": "make general ideas for post"
        },
      ]
    const ExampleData2 = ["hello", "5", "bye"]


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
       <InnerPage hed = "Meeting Notes" logoimg = "/meetingNotes.svg" p = "Notes from meeting" class = "notes" list = {ExampleData} /> 
      </>
    );
  };
  
  export default MeetingNotesPage;