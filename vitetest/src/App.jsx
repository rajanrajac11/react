import React, { useEffect, useState } from "react";
import { ThemeContextProvider } from "./Context/Theme";
import ThemeBtn from "./Component/ThemeBtn";
import Card from "./Component/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  function lightTheme() {
    setThemeMode("light");
  }
  function darkTheme() {
    setThemeMode("dark");
  }
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme }}>
      <ThemeBtn />
      <Card />
    </ThemeContextProvider>
  );
}

export default App;
