import {React, useEffect} from "react";
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Home from "./components/Home"
import Skills from "./components/Skills";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import SubCategories from "./components/SubCategories";
import Tutorials from "./components/Tutorials";
import Lessons from "./components/Lessons";
import './css/Preloader.css'


function App() {

  useEffect(() => {
    const preloader = () => {
      let interval = setInterval(() => {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('allWebsite').style.display = 'block';
        clearInterval(interval)
      }, 3000)
    }
    preloader();
  }, []);

  return (
    <div className="App">
      <div id="preloader">
      <div id="loader" class="nfLoader"></div>
      </div>
      <div id='allWebsite' style={{ display: "none" }}>
      <Navbar />
      <Banner />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/skills"} element={<Skills />} />
        <Route path={"/aboutus"} element={<AboutUs />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/subCategories/:id"} element={<SubCategories />} />
        <Route path={"/subCategories/:id/tutorials/:id"} element={<Tutorials />} />
        <Route path={"/subCategories/:id/tutorials/:id/lessons/:id"} element={<Lessons />} />
      </Routes>

    </div>
    </div>
  );
}

export default App;
