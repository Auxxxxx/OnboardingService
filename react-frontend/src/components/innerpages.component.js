import React, { useEffect, useState } from 'react';
import Navigation from './navbar.component';

const InnerPage = (props) => {
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
  const userDataList = ['1 строка', 'джакузи', 'одеяло'];

  return (

    <main className = "main inner-main">
      <button className ="get-nav" onClick={handleShowNavBar}></button>
            {showNavBar &&
             <Navigation />}
        
      <div class="inner-div">
      <img class = "inner-img" src= {props.logoimg} ></img>
      <h2 class = "pages-h2 inner-h2 " >{props.hed}</h2>
      <p class = "pages-p" >{props.p}</p>
      <ul class = "inner-ul info-ul">
        {userDataList.map((userString) => (
          <li class = "inner-li info-li" ><img className = "inner-li-img" src = "info-li.svg" alt ="point"></img>
          {userString}
          </li>
        ))}
      </ul>
      </div>
    </main>
  );
};

export default InnerPage;