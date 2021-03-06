import {Link } from "react-router-dom"

function Header (){

    function handleClick(){
        document.body.classList.toggle("nav-open")
    }

    return(
        <div className="header">
                <button className="header__toggleMenu" aria-label="toggle navigation" onClick={handleClick}>
                    <span className="header__hamburger"></span>
                </button>

            <h1 className="header__title">KC Ice Breaker Tournament</h1>
            <Link className="header__logo" to="/"> <img className="header__logo" src={require('../Images/KCLogo.png')} alt='KC Logo' /></Link>
        </div>
    )
}
export default Header
