import InnerPage from '../components/innerpages.component.jsx'
import React, { useEffect, useState } from 'react';

const UsefulInfoPage = () => {
    const [showNavBar, setShowNavBar] = useState(false);
    
    const handleShowNavBar = () => {
      setShowNavBar(!showNavBar);
    };
  
    const InfoList = ["bla bla bla", "rsfa4aeerrrrrrfsfrssssssss", "ewaaaaaaaaaaaaaaafeerrrrrrrrrrrrrrrrrr", "eawwwwwwwwwwwwewffew",
    "bla bla bla", "rsfa4aeerrrrrrfsfrssssssss", "ewaaaaaaaaaaaaaaafeerrrrrrrrrrrrrrrrrr", "eawwwwwwwwwwwwewffew",
    "bla bla bla", "rsfa4aeerrrrrrfsfrssssssss", "ewaaaaaaaaaaaaaaafeerrrrrrrrrrrrrrrrrr", "eawwwwwwwwwwwwewffew"
  ]
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
       <InnerPage hed = "Useful Information" logoimg = "/usefulinfo.svg" p = "Notes from meetingRefer to this page for key insights into the business for Media Buying purposes" class = "info" list = {InfoList}/> 
      </>
    );
  };
  
  export default UsefulInfoPage;