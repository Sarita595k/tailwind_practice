export const Navbar = () => {
    return (
        <nav className="flex justify-between p-2 shadow-lg stick-top-0 font-oswald">
            <img src="./vite.svg" alt="logo" />
            <ul className="flex flex-col sm:flex-row capitalize text-fuchsia-800">
                <li className="nav-items"><a href="#">Home</a></li>
                <li className="nav-items"><a href="#">features</a></li>
                <li className="nav-items"><a href="#">pricing</a></li>
                <li className="nav-items"><a href="#">contact</a></li>
            </ul>
        </nav>)
}