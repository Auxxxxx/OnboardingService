import React, { useEffect, useState } from 'react';
import Navigation from '../components/navbar.js';
import InnerPage from '../components/innerpages.jsx'
import PhotoPage from '../components/gallery.js';
import {URL} from "../constants.js"

const ReportPage = (props) => {
  const [showNavBar, setShowNavBar] = useState(false);
  
  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };
  
  const email = props.email; 
  const [userData, setUserData] = useState([]);


  useEffect(() => {
    // Выполнение запроса при монтировании компонента
    fetch(`http://${URL}/note/useful-info?email=${email}`, )
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
     <InnerPage hed = "Reports" logoimg = "/reports.svg" p = "Advertising reports" class = "report" list = {[]}/> 
    </>
  );
};

export default ReportPage;