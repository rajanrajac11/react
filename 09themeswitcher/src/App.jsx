import { useEffect, useState } from "react";
import { ThemeProvider } from "./Context/Theme";
import Card from "./Components/Card";
import ThemeBtn from "./Components/ThemeBtn";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  function lightTheme() {
    setThemeMode("light");
  }
  function darkTheme() {
    setThemeMode("dark");
  }

  //actual change of theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/*Theme button */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/*Theme Card */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
