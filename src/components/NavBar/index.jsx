import { NavLink } from "react-router-dom"
export default function NavBar () {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </nav>  
    )
}