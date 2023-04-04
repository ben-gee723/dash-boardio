import { Outlet } from "react-router-dom"
import ErrorSepense from '../ErrorSuspense'
import NavBar from '../NavBar'
import logo from '../../assets/ben-gee723-logo-w-o-bg.png'

export default function () {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                    <h1>ben-gee723</h1>
                </div>
                <ErrorSepense element={<NavBar/>}/>
            </header>
            <div className="outlet">
                <ErrorSepense element={<Outlet/>}/>
            </div>
        </>
    )
}