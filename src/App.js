import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Mobileheader from "./components/Header/Mobileheader";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";
import Records from "./components/Records/Records";
//import Tution from "./components/Tution/Tution";
import "./Styles.scss";
import "./App.css";
import Price from "./components/Tution/Price";
import Checkout from "./components/Tution/Checkout";
import Questions from "./components/FAQ/Questions";
import Signup from "./components/SignUp/Signup";
import Forum from "./components/Forum/Forum";



function App () {
    return (
        
            <div>
            <Router>
                
                <Mobileheader />
                <Header />
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Quiz" element={<Quiz />} />
                <Route path="/Forum" element={<Forum />} />
                <Route path="/Questions" element={<Questions />} />
                <Route path="/Checkout" element={<Checkout />} />
                <Route path="/Records" element={<Records />} />
                <Route path="/Tution" element={<Price />} />
                
                <Route path="/SignUp" element={<Signup />} />
            </Routes>
            </Router>
            <Footer />
            </div>
    );
}


export default App;