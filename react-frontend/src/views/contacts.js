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

  
  const contactList = ["Name: Anna, Phone: 555-123-4567, Email: anna@mail.com"
  , "Name: Peter, Phone: 555-987-6543, Email: peter@mail.com", 
  " Name: Catherine, Phone: 555-456-7890, Email: catherine@mail.com"
, "Name: Ivan, Phone: 555-246-1359, Email: ivan@mail.com"
, "Name: Maria, Phone: 555-789-3210, Email: maria@mail.com"
, "Name: Alexey, Phone: 555-594-2673, Email: alexey@mail.com"
, "Name: Olga, Phone: 555-315-9876, Email: olga@mail.com"
, " Name: Sergey, Phone: 555-753-1986, Email: sergey@mail.com"
, "Name: Ivan, Phone: 555-246-1359, Email: ivan@mail.com"
, "Name: Maria, Phone: 555-789-3210, Email: maria@mail.com"
, "Name: Alexey, Phone: 555-594-2673, Email: alexey@mail.com"
, "Name: Olga, Phone: 555-315-9876, Email: olga@mail.com"
]

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