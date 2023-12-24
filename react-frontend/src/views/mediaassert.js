import React, { useEffect, useState } from 'react';
import Navigation from '../components/navbar.component.js';
import InnerPage from '../components/innerpages.component.js'

const MediaPage = () => {
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
     <InnerPage hed = "Media Asserts" logoimg = "/mediaAssert.svg" p = "Photo, video for company" /> 
    </>
  );
};

export default MediaPage;