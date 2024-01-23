// context/LogoContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface LogoContextProps {
  selectedLogo: string | null;
  setSelectedLogo: (logo: string | null) => void;
}

const LogoContext = createContext<LogoContextProps | undefined>(undefined);

export const LogoProvider: React.FC = ({ children }) => {
  const [selectedLogo, setSelectedLogo] = useState<string | null>(null);

  return (
    <LogoContext.Provider value={{ selectedLogo, setSelectedLogo }}>
      {children}
    </LogoContext.Provider>
  );
};

export const useLogoContext = () => {
  const context = useContext(LogoContext);
  if (!context) {
    throw new Error('useLogoContext must be used within a LogoProvider');
  }
  return context;
};
