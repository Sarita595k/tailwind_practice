import { useState } from "react"

export const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className="flex justify-between p-2 shadow-lg stick-top-0 font-oswald">
            <img src="./vite.svg" alt="logo" />
            <ul className={`${open ? "opacity-0 translate-y-0" : "opactity-100"} absolute left-0 top-16 w-full bg-white shadow-lg flex flex-col sm:flex-row capitalize text-fuchsia-800 md:static md:flex md:shadow-none md:w-auto
             transition duration-700 ease-in-out`}>
                <li className="nav-items"><a href="#">Home</a></li>
                <li className="nav-items"><a href="#">features</a></li>
                <li className="nav-items"><a href="#">pricing</a></li>
                <li className="nav-items"><a href="#">contact</a></li>
            </ul>
            <button className="text-fuchsia-800 cursor-pointer md:hidden" onClick={() => setOpen(!open)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            </button>
        </nav >)
}