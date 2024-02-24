import React, { useEffect, useState } from 'react';
import Navigation from '../components/navbar.js';
import InnerPage from '../components/innerpages.jsx'
import {URL} from "../constants.js"
import useAuth from '../hooks/useAuth.js';

const MediaPage = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const email = useAuth();

  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };


  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Выполнение запроса при монтировании компонента
    fetch(`http://${URL}/note/media?email=${email}`)
      .then(response => response.json())
      .then(data => {
         setUserData(data);
      })
      .catch(error => {
        console.error('Ошибка получения данных:', error);
      });
  }, []);

   const gallery = ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   , "https://unsplash.com/photos/person-holding-pencil-near-laptop-computer-5fNmWej4tAA"
   , "http://joomlavogue.com/web_designer_developer/wp-content/uploads/2013/08/dt-045.jpg"
   , "https://i.blogs.es/33f737/app_store/1366_2000.jpeg"
  ]

  return (
    <>
     <InnerPage hed = "Media Asserts" logoimg = "/mediaAssert.svg" p = "Photo, video for company" class = "media" list = {gallery}/> 
    </>
  );
};

export default MediaPage;