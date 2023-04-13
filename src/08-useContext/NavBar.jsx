import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
    // <>
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <a className="navbar-brand" href="#">MainApp</a>
    //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //         <div className="navbar-nav">
    //         <Link className="nav-item nav-link" to="/">Home</Link>
    //             <Link className="nav-item nav-link" to="/about">About</Link>
    //             <Link className="nav-item nav-link" to="/login">Login</Link>
    //         </div>
    //     </div>
    //     </nav>
        
    // </>
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">useContext</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <NavLink
                    className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }` }
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }` }
                    to="about"
                >
                    About
                </NavLink>
                <NavLink
                    className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }` }
                    to="login"
                >
                    Login
                </NavLink>
            </ul>
        </div>
        </div>
    </nav>
  )
}
