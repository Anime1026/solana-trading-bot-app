import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";

import { ThemeProvider } from "@material-tailwind/react";

function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
