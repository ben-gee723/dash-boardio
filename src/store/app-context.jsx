import { createContext, useState, useEffect, useContext } from "react";

const InitialContext = createContext();

export function AppContext ({children}) {
    const [width, setWidth] = useState(window.innerWidth)
    const [dropdown, setDropdown] = useState(false)
    const toggleMenu = () => setDropdown(!dropdown)

    useEffect(()=> {
        const updateWidth = () => {
            setWidth(window.innerWidth)
          }
          window.addEventListener('resize', updateWidth);
          
          return(() => {
              window.removeEventListener('resize', updateWidth);
          })
    },[width])

    const value = {width, dropdown, setDropdown, toggleMenu};
    return <InitialContext.Provider value={value}>{children}</InitialContext.Provider>
}

const Store = () => useContext(InitialContext);
export default Store;