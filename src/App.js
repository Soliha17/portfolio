import React from "react";
import "./App.css";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualification from "./components/qualification/Qualification";
import ScrollUp from "./components/scrollUp/ScrollUp";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
      </main>
      <Footer />
      <ScrollUp/>
    </>
  );
}

export default App;
