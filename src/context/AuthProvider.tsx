import React, { ReactNode, useState } from 'react';
import AuthContext from './AuthContext';

interface ContextProviderProps {
  children: ReactNode;
}

export default function ContextProvider({ children }: ContextProviderProps) {
  // Valor do contexto, você pode substituir 'undefined' por um valor real se necessário
  const [user,setUser] = useState()

    let values ={
        user, 
        setUser
    }

  return (
    <AuthContext.Provider value={values}}>
      {children}
    </AuthContext.Provider>
  );
}
