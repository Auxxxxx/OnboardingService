import React from 'react';
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const NotesList = (props) => {
    // получение данных с innerPages
    const [isLoading, setIsLoading] = useState(true);
    let data = {}
    const navigate = useNavigate();
    const noteList = props.list; 
    
    useEffect(() =>{
    // try{
    // const responce = fetch('http://localhost:8080/note/meeting-notes')
    // if(responce.ok){
    //     data = responce.json().parse();
    // } else{
    //   throw new Error("ошибка в получении данных в noteList")
    // }
    // } catch(error){
    //   console.log("ошибка в получении данных в noteList")
    // }
    setInterval(() =>{
      setIsLoading(false)}
      , 2000)
    
    }, [])
    
    if(isLoading) 
    return <><p className = "p-loading">Loading...</p></>
    
    const handleLi = (id) => {
      //window.location.assign('/notes/1');
      navigate(`/notes/${id}`);
    }
   

    const viewNoteList = noteList.map((item, index) => 
    { console.log(item)
      if (
        typeof(item) == "string" &&
        item.length <= 255){
     return <li className = {props.class + "-li"} key = {index} onClick = {() => handleLi(item.id)}>
        <img className = {props.class + "-img"} src = "/meetingNotes.svg" alt = "notes"></img>
        {item.name}     
        {item.date}
     </li>
    } else {
      return <li className = {props.class + "-li-zip"} key = {index} onClick = {handleLi}>
       <img className = {props.class + "-img"} src = "/onboarding.svg" alt = "notes"></img>
        <span className = "notes-name">{item.name}</span> 
        <span className = "notes-date">
        {item.date}
        </span>

      </li>}
    }
    );
    

    return(
    <ul className="notes-ul">
        {viewNoteList}
    </ul>
    );

}

export default NotesList;