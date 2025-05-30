import React from "react";
import "../Estilos/misEstilos.css";
import logo from "../assets/logo.jpeg";
import icono from "../assets/icono.jpeg";
import isaias from "../assets/Isaias.jpeg";


const Portafolio: React.FC = () => (
  <div>
    <header className="custom-header"> 
      <span className="header-title neon-text">P O R T A F O L I O</span>
      <nav className="header-nav">
        <ul>
          <li>
            <a href="#experiencias">Experiencias</a>
          </li>
          <li>
            <a href="#contacto">Sitios</a>
          </li>
          <li>
            <a href="#sitios">Contacto</a>
          </li>
          <li>
            <a href="#cursos">Cursos</a>
          </li>
          <li>
            <a href="#Proyectos">Proyectos</a>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <div className="image-gallery">
        <div className="image-card">
          <img src={logo} alt="Logo" />
          <div className="image-overlay">
            <h3>LOGO ISAIAS._.GAMERS</h3>
            <p>Gaming and Print 3D</p>
          </div>
        </div>

        <div className="image-card">
          <img src={icono} alt="Icono" />
          <div className="image-overlay">
            <h3>ICONO MARCA</h3>
            <p>Consejos en gaming, programación e impresión 3D</p>
          </div>
        </div>

        <div className="image-card">
          <img src={isaias} alt="presentación" />
          <div className="image-overlay">
            <h3>Presentación personal</h3>
            <p>Disponibilidad para ayudar en tus proyectos</p>
          </div>
        </div>
      </div>

      <section id="experiencias">
        <h2>Experiencias</h2>
        <ul className="item-list">
          <li>Estudiante de programación y análisis de sistemas</li>
          <li>Diseñador y modelador de impresión 3D</li>
          <li>Experiencia en Atención al público y ventas</li>
          <li>Desarrollo de talleres prácticos y online</li>
          <li>Orientación en ventas y proyección de proyectos</li>
        </ul>
        <div className="scroller">
          Estudiante en programación y análisis de sistemas,
          con experiencia en diseño y modelado de impresión 3D.
          Busco oportunidades para aplicar mis habilidades en
          proyectos desafiantes. ¡Estoy aquí para ayudar!
          Además podré compartir mis experiencias en el
          ámbito laboral de atención al público y ventas.<br /><br />
          He trabajado en diversos proyectos que combinan mis conocimientos técnicos
          con mi capacidad de comunicación y trabajo en equipo. Mi formación continua
          en desarrollo de software y mi experiencia práctica en modelado 3D me permiten
          abordar problemas desde múltiples perspectivas.
        </div>
      </section>

      <section id="sitios">
        <h2>Sitios</h2>
        <ul className="item-list">
          <li>
            <a href="https://www.linkedin.com/in/ignacio-mu%C3%B1oz-98a627338/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@isaias_lord785" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          </li>
          <li>
            <a href="https://github.com/isaiasMA94" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/isaia._.gamer/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
        </ul>
      </section>

      <section id="contacto">
        <h2>Contacto</h2>
        <ul className="item-list">
          <li>Email: isaiasGamers@gmail.net</li>
          <li>Teléfono: 9123425</li>
          <li>LinkedIn: Ignacio Muñoz</li>
          <li>GitHub: IsaiasMA94</li>
        </ul>
      </section>

      <section id="cursos">
        <h2>Cursos y Certificados</h2>
        <ul className="item-list">
          <li>Curso de Front-end Coursera Meta</li>
          <li>Curso de Programación en Python Cisco Networ Academy</li>
          <li>Curso Programador Java Script Udemy</li>
          <li>Conocimiento Modelado de negocios UML</li>
          <li>Conocimiento de Estructura de datos y BBDD, MySql, NoSql</li>
        </ul>
      </section>
      <section id="Proyectos">
        <h2>Proyectos personales realizados en <br />
        diferentes lenguajes de programación</h2>
        <ul className="item-list">
          <li>Portafolio: React, TypeScript, Bun y Vite</li>
          <li>Calculadora: Html, css, JavaScript</li>
          <li>Selector de eventos: Html, typeScript, React</li>
          <li></li>
          <li>Conocimiento de Estructura de datos y BBDD, MySql, NoSql</li>
        </ul>
      </section>
    </main>
  </div>
);
export default Portafolio;