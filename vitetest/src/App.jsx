import React, { useEffect, useState } from "react";
import useTheme, { ThemeProvider } from "./context/ContextProvider";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";

function App() {
  const [themeMode, setTheme] = useState();
  function lightTheme() {
    setTheme("light");
  }
  function darkTheme() {
    setTheme("dark");
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <ThemeBtn />
      <Card />
    </ThemeProvider>
  );
}

export default App;
