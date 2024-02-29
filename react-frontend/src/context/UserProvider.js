import React, {useContext, createContext, useState} from 'react';

const UserContext = createContext({clients: "hello", setClients: () => {},
});

export const UserProvider = ({children}) => { 
  const [clients, setClients] = useState([]);

return (
    <UserContext.Provider value={{ clients, setClients }}>
      {children}
    </UserContext.Provider>
)
};

export default UserContext;