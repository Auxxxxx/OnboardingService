import React from 'react';



const NotesList = (props) => {
    // получение данных с бекенда
     const noteList = props.data; 
    const viewnoteList = noteList.notes.map((item) => 
    <li classNAme = "notes-li">{item}</li>
    ); 

    return(
    <ul>
        {viewnoteList}
    </ul>
    );


}

export default NotesList;