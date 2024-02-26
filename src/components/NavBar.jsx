import logoSutu from "../../public/img/logo.png";
import {CartWidget} from './CartWidget';
import { Categories } from "./categories";
import { Link } from 'react-router-dom';



export const NavBar = () => {
    return (
        <>
            <header className="NavBar">
            <nav className="barra-principal navbar navbar-expand-lg bg-body-tertiar">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span> 
                </button>
                <Link to={'/'}><img src={logoSutu} alt="logo de SuTu" className="logo-nav"/></Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <div className="dropdown">
                                <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                Perfil
                                </button>
                                <form className="dropdown-menu p-4">
                                <div className="mb-3">
                                    <label htmlFor="exampleDropdownFormEmail2" className="form-label">Dirección Email</label>
                                    <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@ejemplo.com"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleDropdownFormPassword2" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="(¡Debe ser súper segura!)"/>
                                </div>
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="dropdownCheck2"/>
                                        <label className="form-check-label" htmlFor="dropdownCheck2">
                                        Recuerdame
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                                </form>
                            </div>

                            </li>

                        <li className="nav-item"><a href="./pages/catalogo.html">Catálogo</a>
                        </li>
                        

                        <li className="nav-item"><form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="RTX 4070 TI...." aria-label="Search"/>
                            <button className="btn " type="submit">Buscar</button>
                        </form></li>
                        <li className="nav-item"><a href="./pages/contacto.html">Contacto</a></li>
                        <li className="nav-item"><CartWidget/></li>
                        <Categories/>
                        
                    </ul>
                </div>
            </div>  
        </nav>
            </header>
        </>
    );
}
