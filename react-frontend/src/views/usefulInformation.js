import InnerPage from '../components/innerpages.component.jsx'
import React, { useEffect, useState } from 'react';

const UsefulInfoPage = () => {
    const [showNavBar, setShowNavBar] = useState(false);
    
    const handleShowNavBar = () => {
      setShowNavBar(!showNavBar);
    };
  
    const InfoList = ["bla bla bla", "rsfa4aeerrrrrrfsfrssssssss", "ewaaaaaaaaaaaaaaafeerrrrrrrrrrrrrrrrrr", "eawwwwwwwwwwwwewffew",
    "bla bla bla", "rsfa4aeerrrrrrfsfrssssssss", "ewaaaaaaaaaaaaaaafeerrrrrrrrrrrrrrrrrr", "eawwwwwwwwwwwwewffew",
    "bla bla bla", "rsfa4aeerrrrrrfsfrssssssss", "ewaaaaaaaaaaaaaaafeerrrrrrrrrrrrrrrrrr", "eawwwwwwwwwwwwewffew", 
    "Князь Василий говорил всегда лениво, как актер говорит роль старой пиесы. Анна Павловна Шерер, напротив, несмотря на свои сорок лет, была преисполнена оживления и порывов. \
    Быть энтузиасткой сделалось ее общественным положением, и иногда, когда ей даже того не хотелось, она, чтобы не обмануть ожиданий людей, знавших ее, делалась энтузиасткой. Сдержанная улыбка, игравшая постоянно на лице Анны Павловны, хотя и не шла к ее отжившим чертам, выражала, как у избалованных детей, постоянное сознание своего милого недостатка, от которого она не хочет, не может и не находит нужным исправляться. \
    В середине разговора про политические действия Анна Павловна разгорячилась.", 
  ]
    const [userData, setUserData] = useState([]);
  
    useEffect(() => {
      // Выполнение запроса при монтировании компонента
      fetch('http://localhost:8080/note/contact-details')
        .then(response => response.json())
        .then(data => {
           setUserData(data);
        })
        .catch(error => {
          if(error.status === 404) {console.log("У пользователя нет данных")}
          console.error('Ошибка получения данных:', error);
        });
    }, []);
  
    return (
      <>
       <InnerPage hed = "Useful Information" logoimg = "/usefulinfo.svg" p = "Notes from meetingRefer to this page for key insights into the business for Media Buying purposes" class = "info" list = {InfoList}/> 
      </>
    );
  };
  
  export default UsefulInfoPage;