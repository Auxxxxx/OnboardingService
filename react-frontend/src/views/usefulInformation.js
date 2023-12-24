import InnerPage from '../components/innerpages.component.js'
import React, { useEffect, useState } from 'react';

const UsefulInfoPage = () => {
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
       <InnerPage hed = "Useful Information" logoimg = "/usefulinfo.svg" p = "Notes from meetingRefer to this page for key insights into the business for Media Buying purposes" /> 
      </>
    );
  };
  
  export default UsefulInfoPage;