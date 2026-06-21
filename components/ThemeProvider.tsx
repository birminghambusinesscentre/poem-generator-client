"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme, themes } from '@/config/themes';

interface ThemeContextType {
  currentTheme: Theme;
  setCurrentTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <div 
        className={`min-h-screen overflow-x-hidden relative ${currentTheme.textColor}`}
        style={{
          backgroundImage: `url(${currentTheme.imagePath})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
