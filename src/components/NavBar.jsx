import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import CartWidget from "./CartWidget"
import "./styles/NavBar.css"

const NavBar = ( {background} ) => {

    return (

        <header className={`header-background--${background}`} >

        <div className="header-container">

            {/*boton menu*/}
            <div className="menu-button">
            <FontAwesomeIcon icon= {faBars} />
            <small>Menu</small>
            </div>

            {/*link de navegacion */}
            <nav>
                <ul className="nav-container">
                    <li className="">
                        <a href="/">inicio</a>
                    </li>
                    
                    <li className="products-item">
                        <a href="/">productos</a>
                    </li>

                    <li>
                        <a href="/">Blog</a>
                    </li>

                    <li>
                        <a href="/">contacto</a>
                    </li>
                    
                </ul>
            </nav>

            {/*logo*/}
            <div className="logo-container">
                {/* <img src= {logo} alt="" /> */}
            </div>
        </div>

        {/*cart-widget*/}
        <div>
            <CartWidget/>
        </div>


        </header>
    )
}
export default NavBar