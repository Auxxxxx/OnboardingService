import InnerPage from '../components/innerpages.jsx'
import React, { useEffect, useState } from 'react';

const UsefulInfoPage = () => {
    const [showNavBar, setShowNavBar] = useState(false);
    
    const handleShowNavBar = () => {
      setShowNavBar(!showNavBar);
    };
  
  
    const [userData, setUserData] = useState([]);
  
    // useEffect(() => {
    //   // Выполнение запроса при монтировании компонента
    //   fetch('http://localhost:8080/note/useful-info')
    //     .then(response => response.json())
    //     .then(data => {
    //        setUserData(data);
    //     })
    //     .catch(error => {
    //       console.error('Ошибка получения данных:', error);
    //     });
    // }, []);
  
    return (
      <>
       <InnerPage hed = "Onboarding" logoimg = "/onboarding.svg" p = "Onboarding quizz" class = "onboarding" /> 
      </>
    );
  };
  
  export default UsefulInfoPage;