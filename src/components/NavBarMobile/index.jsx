import { useState } from "react"
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

export default function NavBarMobile () {
    const [focused, setFocused] = useState(false)
    const onClick = () => setFocused(!focused)

    return (
        <>
            <nav className="nav-bar-mobile">
                
                <button className="dropdown-menu button" onClick={onClick}>
                    <FontAwesomeIcon icon={solid("bars")} />
                </button>
            
                <NavLink to='/' className="all-apps button">
                    <FontAwesomeIcon icon={solid("home")} />
                </NavLink>
        </nav>  
        {focused ? <div className="modal-container"> 
                {data.navlinks.map(link => {
                    return <NavLink onClick={onClick} key={link.name} to={`${link.path}`} className={link.icon ? "": "all-apps"}>
                        <div className="option-container">
                            {link.icon? <><FontAwesomeIcon className="icon" icon={icons[link.icon]} /><h2>{link.name}</h2> </>: <h2>{link.name}</h2>}
                        </div>
                    </NavLink>
                })}
            </div> : ""}
        </>
    )
}