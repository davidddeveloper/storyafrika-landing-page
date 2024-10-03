import { createContext, useState, useContext } from "react"

const ThemeContext = createContext()

export default function Theme ({children}) {
    const [theme, setTheme] = useState('bg-white text-black')
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)