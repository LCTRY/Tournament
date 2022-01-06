import {Link } from "react-router-dom"

function Nav (){
    return(
        <div className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Standings">Standings</Link></li>
                <li><Link to="/Schedule">Schedule</Link></li>
                <li><Link to="/Auction">Auction</Link></li>
                <li><Link to="/Photos">Photos</Link></li>
            </ul>
        </div>
    )
}

export default Nav