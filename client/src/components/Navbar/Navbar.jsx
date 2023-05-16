import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
    return (
        <header className="buttons">

            <Link to='/home' >
                <button className="btn">HOME</button>
            </Link>

            <Link to='/'>
                <button className="btn">LOG OUT</button>
            </Link>
        </header>
    )
}

export default Navbar