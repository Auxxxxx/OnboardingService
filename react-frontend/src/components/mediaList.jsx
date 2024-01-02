import React from 'react';



const MediaList = (props) => {
    // получение данных с innerPages
    const noteList = props.list; 
    const viewNoteList = noteList.map((item, index) => 
    {if (
        typeof(item) == "string" &&
        item.length <= 255){
        return <li className = {props.class + "-li"} key = {index}>
        <img className = {props.class + "-img"} src = {item} alt = "image source"></img>
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

export default MediaList;