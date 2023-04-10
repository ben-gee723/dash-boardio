import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import ErrorSepense from '../ErrorSuspense'
import NavBar from '../NavBar'
import NavBarMobile from "../NavBarMobile"
import Store from "../../store/app-context"
export default function () {
    const { width } = Store()
    
    return (
        <>
            <div className="outlet">
                <ErrorSepense element={<Outlet/>}/>
            </div>
            <header className="header">
                {width > 767 ? <ErrorSepense element={<NavBar/>}/> : <ErrorSepense element={<NavBarMobile/>}/>}
            </header> 
        </>
    )
}