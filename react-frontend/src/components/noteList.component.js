import React from 'react';



const NotesList = (props) => {
    // получение данных с innerPages
    const noteList = props.list; 
    const viewNoteList = noteList.map((item, index) => 
    {if (
        typeof(item) == "string" &&
        item.length <= 255){
     return <li className = {props.class + "-li"} key = {index}>
        <img className = {props.class + "-img"} src = "/meetingNotes.svg" alt = "notes"></img>
        {item.name}     
        {item.date}
     </li>
    } else {
      return <li className = {props.class + "-li-zip"} key = {index}>
       <img className = {props.class + "-img"} src = "/onboarding.svg" alt = "notes"></img>
        <span className = "notes-name">{item.name}</span> 
        <span className = "notes-date">
        {item.date}
        </span>

      </li>}
    }
    ); 

    return(
    <ul>
        {viewNoteList}
    </ul>
    );


}

export default NotesList;