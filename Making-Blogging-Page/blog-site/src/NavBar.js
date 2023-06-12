// This is the navbar section
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutus">About us</Link></li>
                <li><Link to="/articlelist">Article Lists</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;