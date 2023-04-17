import { NavLink } from "react-router-dom"
import data from '../../data/data.json'
import Store from "../../store/app-context"
import icons from '../../data/icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function NavBarMobile () {
    const { toggleMenu, dropdown} = Store()

    return (
        <>
            <nav className="nav-bar-mobile">
                
                <button className="dropdown-menu button" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={solid("bars")} />
                </button>
            
                <NavLink to='/' className="all-apps button" onClick={()=> setDropdown(false)}>
                    <FontAwesomeIcon icon={solid("home")} />
                </NavLink>
        </nav>  
        {dropdown ? <div className="modal-container"> 
            {data.navlinks.map(link => {
                return <NavLink onClick={toggleMenu} key={link.name} to={`${link.path}`} className={link.icon ? "": "all-apps"}>
                    <div className="option-container">
                        {link.icon? <><FontAwesomeIcon className="icon" icon={icons[link.icon]} /><h2>{link.name}</h2> </>: <h2>{link.name}</h2>}
                    </div>
                </NavLink>
            })}
        </div> : ""}
        </>
    )
}