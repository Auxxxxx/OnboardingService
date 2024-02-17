import React, {useContext, createContext, useState} from 'react';

const AuthContext = createContext({isAuntificated: false, setAuth: () => {},
email: "", setEmail: () => {}
});

export const AuthProvider = ({children}) => { 
  const [isAuthenticated, setAuth] = useState(false);
  const [email, setEmail] = useState("");

return (
    <AuthContext.Provider value={{ isAuthenticated, setAuth, email, setEmail }}>
      {children}
    </AuthContext.Provider>
)
};

export default AuthContext;