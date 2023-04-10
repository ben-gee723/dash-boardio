import { createContext, useState, useEffect, useContext } from "react";

const InitialContext = createContext();

export function AppContext ({children}) {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(()=> {
        const updateWidth = () => {
            setWidth(window.innerWidth)
          }
          window.addEventListener('resize', updateWidth);
          
          return(() => {
              window.removeEventListener('resize', updateWidth);
          })
    },[width])

    const value = {width};
    return <InitialContext.Provider value={value}>{children}</InitialContext.Provider>
}

const Store = () => useContext(InitialContext);
export default Store;