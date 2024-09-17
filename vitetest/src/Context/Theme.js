import React from "react"
import {useContext} from "react"

export const ThemeContext = React.createContext({
    themeMode : "light",
    lightTheme:()=>{},
    darkTheme:()=>{}
})

export const ThemeContextProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}