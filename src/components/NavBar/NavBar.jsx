import { Navbar } from "react-bootstrap"
import { Container } from "react-bootstrap"
import "./NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faDownload } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

export const NavBar = () =>{
    return(
        <div className="bg-black py-3">
            <Container>
                    <Navbar>
                        <button className="hamburger" id="hamburger" onClick={()=>{
                                document.getElementById("nav-ul").classList.toggle("show");
                            }}>
                            <FontAwesomeIcon className="fas fa-bars" icon={faBars}/>
                        </button>
                        <ul className="nav-bar nav nav-ul" id="nav-ul">
                            <li className="nav-item ">
                                <a href="#Sobre-mi" className="nav-link item">Inicio</a>
                            </li>
                            <li className="nav-item ">
                                <a href="#Proyectos" className="nav-link item">Proyectos</a>
                            </li>
                            <li className="nav-item ">
                                <a href="#Estudios" className="nav-link item">Estudios</a>
                            </li>
                            <li className="nav-item ">
                                <a href="#Contacto" className="nav-link item">Contacto</a>
                            </li>
                        </ul>
                        <div id="cvv">
                            <a href="kfcv.pdf" id="cv" download="kfcv.pdf">Descargá mi cv <FontAwesomeIcon icon={faDownload}/></a>
                        </div>
                    </Navbar>
            </Container>
        </div>
    )
}