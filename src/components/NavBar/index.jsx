import { NavLink } from "react-router-dom"
// spaced between
// main <---> Home <---> categories

export default function NavBar () {
    return (
        <nav className="nav-bar">
            <div className="main-container containers">
                <NavLink to='/main' className="button">
                    Main
                </NavLink>
            </div>
            <div className="containers">
                <NavLink to='/' className="all-apps button">
                    All
                </NavLink>
            </div>
            <div className="cat-container containers">
                Categories(?)
            </div>
        </nav>  
    )
}