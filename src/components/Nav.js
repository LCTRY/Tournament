import {Link } from "react-router-dom"

function Nav (){
    return(
        <div className="nav">
            <ul className="nav__list">
                <li><Link className="nav__link" to="/"><i className="fas fa-home"></i> Home</Link></li>
                <li><Link className="nav__link" to="/Standings"><i className="fas fa-list-ol"></i> Standings</Link></li>
                <li><Link className="nav__link" to="/Schedule"><i className="far fa-calendar"></i> Schedule</Link></li>
                <li><Link className="nav__link" to="/Auction"><i className="fas fa-shopping-bag"></i> Auction</Link></li>
                <li><Link className="nav__link" to="/Photos"><i className="fas fa-camera"></i> Photos</Link></li>
            </ul>
        </div>
    )
}

export default Nav