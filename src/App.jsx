import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutIdea from "./pages/AboutIdea";
import Game from "./pages/Game";
import Footer from "./components/Footer";

function App() {
  const [partOfApp, setPartOfApp] = useState("startingPage");
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-idea" element={<AboutIdea />} />
          <Route path="/game" element={<Game />} />
          <Route path="/about-game" element={<AboutIdea />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
