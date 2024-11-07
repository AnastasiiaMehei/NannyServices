import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleTheme = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ isClicked, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};