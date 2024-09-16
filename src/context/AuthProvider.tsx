import React, { ReactNode, useState } from 'react';
import AuthContext, { usuarios } from './AuthContext';

interface ContextProviderProps {
  children: ReactNode;
}

export default function ContextProvider({ children }: ContextProviderProps) { 
  
  return (
    <>
      <AuthContext.Provider value={usuarios}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
