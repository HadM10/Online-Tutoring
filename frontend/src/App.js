import React from "react";
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Ourtrainers from "./components/Ourtrainers";
import Home from "./components/Home"
import Skills from "./components/Skills";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Ourtrainers />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/skills"} element={<Skills />} />
        <Route path={"/aboutus"} element={<AboutUs />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
