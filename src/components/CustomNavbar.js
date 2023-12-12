// Importa las librerías y archivos necesarios
import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/img/logos.png';
import navIcon1 from '../assets/img/wasaps.webp';
import navIcon3 from '../assets/img/face.png';

// Define el componente CustomNavbar
export const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Maneja el evento de desplazamiento
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Actualiza el enlace activo
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  // Renderiza el componente Navbar
  return (
    <Navbar expand="lg" className={`custom-navbar ${scrolled ? "scrolled" : ""} fixed-top`}>
      {/* Logo y Títulos */}
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" style={{ width: '100px', marginRight: '10px' }} />
        </Navbar.Brand>

        {/* Botón para expandir/cerrar el Navbar en dispositivos móviles */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>

        {/* Contenido del Navbar que se muestra al expandir */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>INFORMATICOS IMPORTANTES</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>BIOGRAFIAS</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>LOGROS</Nav.Link>
          </Nav>

          {/* Iconos sociales en la esquina superior derecha */}
          <div className="social-icon d-flex" style={{ position: 'absolute', top: 0, right: '10px' }}>
            <a href="$"><img src={navIcon1} alt="" style={{ width: '50px', marginRight: '10px' }} /></a>
            <a href="$"><img src={navIcon3} alt="" style={{ width: '50px' }} /></a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
