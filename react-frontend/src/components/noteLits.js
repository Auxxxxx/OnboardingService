import React from 'react';
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import useNotes from '../hooks/useNotes';
import {URL} from '../constants'
import useAuth from '../hooks/useAuth';

const NotesList = (props) => {
    // получение данных с innerPages
    const [isLoading, setIsLoading] = useState(true);
    const {data, setData} = useNotes();
    const email = useAuth().email;
    console.log(email)
    // let data = {}
    const navigate = useNavigate();
    // const noteList = props.list; 
    const noteList = [{id: 0, content: ["Hello", " Good Bye!"] , header: "Design"},
    {id: 1, content: ["Hello", " Good Bye!"] , header: "Artist"}]; 

    
    useEffect(() =>{
    const request = fetch(`http://${URL}/note/meeting-notes/${email}`)
    // if(responce.ok){
    //     setData(( JSON.parse(responce.json())).meetingNotes)
    // } else{
    //   throw new Error("ошибка в получении данных в noteList", responce.status)
    // }
    // } catch(error){
    //   // console.log("ошибка в получении данных в meetingNotes", error.code)
    // }
      .then((response) => {
        response.json().then(function(result){
          setData(result.meetingNotes)
        }
        )
      }) 
      .catch(err => console.log(err))


    setInterval(() =>{
      setIsLoading(false)}
      , 2000)
      }, [])
    
    if(isLoading) 
    return <><p className = "p-loading">Loading...</p></>
    
    // const handleLi = (id) => {
    //   //window.location.assign('/notes/1');
    //   console.log("id" + id)
    //   navigate(`/notes/${`${id}`}`);
    // }
   
    console.log("data:", data)

    const viewNoteList = data.map((item, index) => 
    { 
      let id = item.id
      console.log(id)
      let url = `/notes/${`${id}`}`
      if (
        typeof(item) == "string" &&
        item.length <= 255){
     return <li className = {props.class + "-li"} key = {index} onClick = {() => {navigate(url); console.log(url); }}>
        <img className = {props.class + "-img"} src = "/meetingNotes.svg" alt = "notes"></img>
        {item.name}     
        {item.date}
     </li>
    } else {
      return <li className = {props.class + "-li-zip"} key = {index} onClick = {() => navigate(url)}>
       <img className = {props.class + "-img"} src = "/onboarding.svg" alt = "notes"></img>
        <span className = "notes-name">{item.header}</span> 
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