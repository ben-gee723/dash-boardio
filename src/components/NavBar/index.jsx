import { NavLink } from "react-router-dom"
// spaced between
// main <---> Home <---> categories

export default function NavBar () {
    return (
        <nav className="nav-bar">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </nav>  
    )
}