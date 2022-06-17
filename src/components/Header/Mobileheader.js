import React from 'react'
import "./Mobileheader.scss";
import { Container, Navbar, Offcanvas } from 'react-bootstrap';


const Mobileheader = () => {
  return (
    <div>
        <Navbar className='headermobile' expand={false}>
  <Container fluid className='Nav'>




        <Navbar.Toggle aria-controls="offcanvasNavbar" className='Toggle' />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="start"
      style={{width: "30rem"}}
    >
      <Offcanvas.Header closeButton className='closebutton'>
        <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        
<header className="headersmall">

<a href="/#" className="logo"> <i className="fas fa-graduation-cap"></i> Optimum Uni </a>

<nav class="navbar">
  
<a href="/"> <i className="fas fa-angle-right"></i> Home </a>
        <a href="#courses"> <i className="fas fa-angle-right"></i> Courses </a>
        <a href="/Tution"> <i className="fas fa-angle-right"></i> Pay Tuition </a>
        <a href="/Records"> <i className="fas fa-angle-right"></i> Staffs </a>
        <a href="/Quiz"> <i className="fas fa-angle-right"></i> Quiz </a>
        <a href="/Questions"> <i className="fas fa-angle-right"></i> FAQ </a>
</nav>


</header>


    
      </Offcanvas.Body>
    </Navbar.Offcanvas>
    </Container>
  </Navbar>



    </div>
  )
}

export default Mobileheader