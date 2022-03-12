import { React, useEffect } from "react";
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
import Footer from "./components/Footer"
import Payment from "./components/Payment";
import Register from "./components/Register";
import './css/Preloader.css'
import Signin from "./components/Signin";
import  axios from 'axios';
import { AuthContextProvider } from './services/AuthContext.js';

axios.defaults.withCredentials = true;

function App() {

  useEffect(() => {
    const preloader = () => {
      let interval = setInterval(() => {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('allWebsite').style.display = 'block';
        clearInterval(interval)
      }, 1000)
    }
    preloader();
  }, []);

  return (
    <div className="App">
      <div id="preloader">
        <div id="loader" class="nfLoader"></div>
      </div>
      <div id='allWebsite' style={{ display: "none" }}>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/skills"} element={<Skills />} />
          <Route path={"/aboutus"} element={<AboutUs />} />
          <Route path={"/login"} element={<Signin />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/subCategories/:id"} element={<SubCategories />} />
          <Route path={"/subCategories/:id/tutorials/:id"} element={<Tutorials />} />
          <Route path={"/subCategories/:id/tutorials/:id/lessons/:id"} element={<Lessons />} />
          <Route path={"/payment"} element={<Payment />}></Route>
        </Routes>
        <Footer />
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
