import { NavLink } from "react-router-dom"
import data from '../../data/data.json'

// spaced between
// main <---> Home <---> categories

export default function NavBar () {
    return (
        <nav className="nav-bar">
            <div className="main-container containers">
                {data.mainLinks.map(link => <NavLink to={`${link.path}`} className="button">{link.name}</NavLink>)}
            </div>
            
            <div className="containers">
                <NavLink to='/' className="all-apps button">
                    All
                </NavLink>
            </div>
            
            {/* <div className="cat-container containers">
                {data.mainLinks.map(link => <NavLink to={`links/${link.path}`} className="button">{link.name}</NavLink>)}
            </div> */}
        </nav>  
    )
}