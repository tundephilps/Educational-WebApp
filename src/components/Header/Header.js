import React from 'react'
//import Home from '../Home/Home';
import "./Header.scss";

//import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

const Header = () => {
  return (
    <>
    <section>

<header className="header">

    <a href="/#" className="logo"> <i className="fas fa-graduation-cap"></i> Optimum Uni </a>

    <nav class="navbar">
        <a href="/"> <i className="fas fa-angle-right"></i> Home </a>
        <a href="/Forum"> <i className="fas fa-angle-right"></i> Student Forum </a>
        <a href="/Tution"> <i className="fas fa-angle-right"></i> Pay Tuition </a>
        <a href="/Records"> <i className="fas fa-angle-right"></i> Staffs </a>
        <a href="/Quiz"> <i className="fas fa-angle-right"></i> Quiz </a>
        <a href="/Questions"> <i className="fas fa-angle-right"></i> FAQ </a>

        <a href="/SignUp"> <i className="fas fa-angle-right"></i> SignUp / LogIn </a>      
    </nav>


</header>

</section>
    </>
  )
}

export default Header;


/*


<div id="menu-btn" className="fas fa-bars"></div>
window.onload = function(){
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = function(){
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');
}

window.onscroll = function(){
  menu.classList.remove('fa-times');
  header.classList.remove('active');
}

}
/*
    <div class="share">
        <a href="#" class="fab fa-facebook-f"></a>
        <a href="#" class="fab fa-twitter"></a>
        <a href="#" class="fab fa-instagram"></a>
        <a href="#" class="fab fa-linkedin"></a>
    </div>

    <p class="credit">created by <span>mr. web designer</span> | all rights reserved!</p>
*/
