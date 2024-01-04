import React from 'react';



const UsefulInfoList = (props) => {
    // получение данных с innerPages
    const noteList = props.list; 
    const viewNoteList = noteList.map((item, index) => 
    {if (typeof(item) == "string"){
       
       if (item.length <= 255) {
        return <li className = {props.class + "-li"} key = {index}>
        <p>{item}</p>
      </li>
      } else  {
        return <li className = {props.class + "-li"} key = {index}>
        <p>{item.substring(0, 255) + "..."}</p>
      </li>
      }
    }
}
    ); 

    return(
    <ul>
        {viewNoteList}
    </ul>
    );
}

export default UsefulInfoList;