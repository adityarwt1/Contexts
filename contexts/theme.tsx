import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme?: string;
}

export function ThemeProvider({
  children,
  initialTheme = "light",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  // Add/remove dark class on <html> tag
 useEffect(()=>{
    const root = window.document.documentElement
    if(theme =="dark"){
        root.classList.add("dark")
    }
    else{
        root.classList.remove("dark")
    }
 },[theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("ThemeProvider is missing in your component tree");
  }
  return context;
}
