import React from "react";
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Home from "./components/Home"
import Skills from "./components/Skills";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import SubCategories from "./components/SubCategories";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/skills"} element={<Skills />} />
        <Route path={"/aboutus"} element={<AboutUs />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/subCategories/:id"} element={<SubCategories />} />
      </Routes>

    </div>
  );
}

export default App;
