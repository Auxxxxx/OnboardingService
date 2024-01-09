import React, { useEffect, useState } from 'react';
import Navigation from './navbar.component';

const Onboarding = () => {
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
    <div>
      <button className ="navBar" onClick={handleShowNavBar}></button>
            {showNavBar &&
             <Navigation />}
        
      <img class = "info-img" src= "/Usefulinfo.svg" ></img>
      <div class="info-left-align">
      <h2 class = "pages-h2 info-h2 " >Useful Info</h2>
      <p class = "pages-p" >Refer to this page for key insights into the business for Media Buying purposes</p>
      <ul>
        {userData.map((userString, index) => (
          <li key={index}>{userString}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Onboarding;