import React, { useEffect, useState } from 'react';
import Navigation from '../components/navbar.component.js';
import InnerPage from '../components/innerpages.component.jsx'
import PhotoPage from '../components/gallery.js';

const ContactPage = (props) => {
  const [showNavBar, setShowNavBar] = useState(false);
  
  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };
  
  const email = props.email; 
  const [userData, setUserData] = useState([]);

  
  const contactList = ["8 916 13 434 324.  This is good performence. \n telegram:  @fgreggtg "
  , "8 916 13 434 32sdffvddddddddddd # sfklllllllllllllllls "]

  useEffect(() => {
    // Выполнение запроса при монтировании компонента
    fetch(`http://localhost:8080/note/useful-info?email=${encodeURIComponent(email)}`, )
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
     <InnerPage hed = "Contacts" logoimg = "/clientContact.svg" p = "Detail information about contacts" class = "contacts" list = {contactList}/> 
    </>
  );
};

export default ContactPage;