import React, { createContext, useContext } from 'react';
import { NavbarProps } from '@/components/ui/molecules/navbar/navbar.types';

interface GlobalContextType {
  navbarContent: NavbarProps;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children, navbarContent }: { children: React.ReactNode; navbarContent: NavbarProps }) => {
  return (
    <GlobalContext.Provider value={{ navbarContent }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext debe usarse dentro de GlobalProvider');
  }
  return context;
};