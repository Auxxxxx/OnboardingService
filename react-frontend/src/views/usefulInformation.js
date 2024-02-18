import InnerPage from '../components/innerpages.jsx'
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth.js';

const UsefulInfoPage = () => {
    const [showNavBar, setShowNavBar] = useState(false);
    const [userData, setUserData] = useState([]);
    const email = useAuth();
    const [isLoading, setIsLoading] = useState(true);


    const handleShowNavBar = () => {
      setShowNavBar(!showNavBar);
    };
  
   
  
    // useEffect(() => {
    //   // Выполнение запроса при монтировании компонента
    //   fetch(`http://localhost:8080/note/useful-info?email=${encodeURIComponent(email)}`)
    //     .then(response => response.json())
    //     .then(data => {
    //        setUserData(data);
    //     })
    //     .catch(error => {
    //       if(error.status === 404) {console.log("У пользователя нет данных")}
    //       console.error('Ошибка получения данных:', error);
    //     });

    // setUserData(InfoList);    
    // }, []);
  
    return (
      <>
       <InnerPage hed = "Useful Information" logoimg = "/usefulinfo.svg" p = "Notes from meetingRefer to this page for key insights into the business for Media Buying purposes" class = "info" list = {userData}/> 
      </>
    );
  };
  
  export default UsefulInfoPage;