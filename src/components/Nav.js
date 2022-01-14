import {Link } from "react-router-dom"

function Nav (){
    function handleClick(){
        document.body.classList.toggle("regForm-open")
    }
    function handleMouseLeave(){
        document.body.classList.toggle("nav-open")
    }    
    return(
        <div className="nav" onMouseLeave={handleMouseLeave}>
            <ul className="nav__list">
                <li><Link className="nav__link" to="/"><i className="fas fa-home"></i> Home</Link></li>
                <li><Link className="nav__link" to="/Standings"><i className="fas fa-list-ol"></i> Standings</Link></li>
                <li><Link className="nav__link" to="/Schedule"><i className="far fa-calendar"></i> Schedule</Link></li>
                <li><Link className="nav__link" to="/Auction"><i className="fas fa-shopping-bag"></i> Auction</Link></li>
                <li><Link className="nav__link" to="/Photos"><i className="fas fa-camera"></i> Photos</Link></li>
                <li><div className="nav__reg" onClick={handleClick}> <i className="fas fa-pencil-alt"></i> Register</div></li>
            </ul>
        </div>
    )
}

export default Nav