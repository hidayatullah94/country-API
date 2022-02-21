import { useState } from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import ThemeContext, { Theme } from "./pages/ThemeContex.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [darks, setDarks] = useState(Theme.light);
  const DarkMode = () => {
    darks === Theme.dark ? setDarks(Theme.light) : setDarks(Theme.dark);
  };
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={darks}>
        <Routes>
          <Route path="/" exact element={<Home onClick={DarkMode} />} />
          <Route path="/detail/:name" exact element={<Detail />} />
        </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
