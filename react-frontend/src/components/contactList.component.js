import React from 'react';



const ContactList = (props) => {
    // получение данных с innerPages
    const noteList = props.list; 
    const viewNoteList = noteList.map((item, index) => 
    {if (
        typeof(item) == "string" &&
        item.length <= 255){
        return <li className = {props.class + "-li"} key = {index}>
        <p>{item}</p>
      </li>
      }
    }
    ); 

    return(
    <ul>
        {viewNoteList}
    </ul>
    );
}

export default ContactList;