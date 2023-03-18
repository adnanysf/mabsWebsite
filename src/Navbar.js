import { Link } from "react-router-dom"
import { useMatch,useResolvedPath } from "react-router-dom";

export default function Navbar(){

    return(
        <nav className="nav">

            <h1 className="homeButton">
                MABS
            </h1>

            <ul>
                    <CustomLink to="/" className="upButton">Home</CustomLink>
                    <CustomLink to="/About" className="aboutButton">About Us</CustomLink>
                    <CustomLink to="/recruitment" className="pastbutton">Recruitment</CustomLink>
                    <CustomLink to="/current" className="currentbutton">Members</CustomLink>
                    <CustomLink to="/upcoming" className="upButton">Events</CustomLink>
                    <CustomLink to="/Contact" className="contactbutton">Contact Us</CustomLink>

            </ul>

        </nav>



    )

}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}  {...props}>
                {children}
            </Link>
        </li>
    );
}
