import { Outlet } from "react-router-dom"
import ErrorSepense from '../ErrorSuspense'
import NavBar from '../NavBar'
import logo from '../../assets/ben-gee723-logo-w-o-bg.png'

export default function () {
    return (
        <>
            <div className="outlet">
                <ErrorSepense element={<Outlet/>}/>
            </div>
            <header className="header">
                <ErrorSepense element={<NavBar/>}/>
            </header> 
        </>
    )
}