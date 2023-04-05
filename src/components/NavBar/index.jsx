import { lazy } from "react"
import { NavLink } from "react-router-dom"
import data from '../../data/data.json'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

// spaced between
// main <---> Home <---> categories

const icons = {
    user: solid("user"), 
    class: solid("chalkboard-user"), 
    team: solid("people-group"), 
}

export default function NavBar () {
    return (
        <nav className="nav-bar">
            <div className="main-container containers">
                {data.mainLinks.map(link => {
                    return <NavLink key={link.name} to={`${link.path}`} className={link.icon ? "button": "all-apps button"}>
                        {
                        link.icon
                            ? <FontAwesomeIcon icon={icons[link.icon]} />
                            : <h3>{link.name}</h3>
                        }
                    </NavLink>
                })}
            </div>
            
            <div className="containers">
                <NavLink to='/' className="all-apps button">
                    <FontAwesomeIcon icon={solid("home")} />
                </NavLink>
            </div>
        </nav>  
    )
}