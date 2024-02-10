import InnerPage from '../components/innerpages.component.jsx'
import React, { useEffect, useState } from 'react';

const TemplateNote = (props) => {
    const [showNavBar, setShowNavBar] = useState(false);
    
    const handleShowNavBar = () => {
      setShowNavBar(!showNavBar);
    };
  
    
    const [userData, setUserData] = useState([]);
    const i = 1;

    let text = "This is article about ...";

    let longText = "Philip Kotler (born May 27, 1931) is an American marketing author, consultant, and professor emeritus; the S. C. Johnson & Son Distinguished Professor of International Marketing at the Kellogg School of Management at Northwestern University (1962–2018). He is known for popularizing the definition of marketing mix. He is the author of over 80 books, including Marketing Management, Principles of Marketing, Kotler on Marketing, Marketing Insights from A to Z, Marketing 4.0, Marketing Places, Marketing of Nations, Chaotics, Market Your Way to Growth, Winning Global Markets, Strategic Marketing for Health Care Organizations, Social Marketing, Social Media Marketing, My Adventures in Marketing, Up and Out of Poverty, and Winning at Innovation. Kotler describes strategic marketing as serving as the link between society's needs and its pattern of industrial response.\
    Kotler helped create the field of social marketing that focuses on helping individuals and groups modify their behaviors toward healthier and safer living styles. He also created the concept of demarketing to aid in the task of reducing the level of demand. He also developed the concepts of  prosumers, atmospherics, and  societal marketing. He is regarded as The Father of Modern Marketing by many scholars.\
    Kotler's latest work focuses on economic justice and the shortcomings of capitalism. He published Confronting Capitalism: Real Solutions for a Troubled Economic System in 2015, Democracy in Decline: Rebuilding its Future in 2016, Advancing the Common Good in 2019, and Brand Activism: From Purpose to Action in 2018"
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
       <InnerPage hed = "Notes" logoimg = "/Onboarding.svg" p = {longText} class = {"notes-"} /> 
      </>
    );
  };
  
  export default TemplateNote;