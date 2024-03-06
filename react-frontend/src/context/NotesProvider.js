import React from 'react';
import {useState} from 'react';
import { createContext } from 'react';


const NoteContext = createContext({data: [
  // {id: 0, content: ["Hello", " Good Bye!"] , header: "Design", date: "12.04.23"},
  // {id: 1, content: ["Hello", " Good Bye!"] , header: "Artist", date: "01.03.23"}
  ],
   setData: () => {}});

export const NoteProvider = ({children}) =>{
    const [data, setData] = useState(
    []);

    return ( <NoteContext.Provider value={{ data, setData }}>
        {children}
      </NoteContext.Provider>
      )

}

export default NoteContext;