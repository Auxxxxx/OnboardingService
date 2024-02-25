import React from 'react';
import {useState} from 'react';
import { createContext } from 'react';


const UserContext = createContext({clients: 
  [
  //   {id: 0, email: "2@mail.ru", fullName: "Design Hi", password: "22222"},
  // {id: 1, email: "1@mail.ru" , fullName: "Patrik Hildow", password: "11111"}, 
  ] 
  ,
   setClients: () => {}});

export const UserProvider = ({children}) =>{
    const [clients, setClients] = useState(
      [
      // {id: 0, email: "2@mail.ru" , fullName: "Patrik Hildow", password: "22222"},
      // {id: 1, email: "1@mail.ru" , fullName: "Mia Lindow", password: "11111"},
    ]
      
    );

    return ( <UserContext.Provider value={{ clients, setClients }}>
        {children}
      </UserContext.Provider>
      )

}

export default UserContext;