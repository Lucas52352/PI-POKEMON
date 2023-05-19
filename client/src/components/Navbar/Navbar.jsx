import { Link } from "react-router-dom"
import './Navbar.css'
import Searchbar from "../Searchbar/Searchbar"

const Navbar = () => {
    return (
        <header className="navBar">

            <Link to='/home' >
                <button className="btn">Home</button>
            </Link>

            <Link to='/create' >
                <button className="btn">Create your pokemon</button>
            </Link>

            <Link to='/search'>
                <button className="btn">Search</button>
            </Link>

            <Link to='/'>
                <button className="btn">LOG OUT</button>
            </Link>
        </header>
    )
}

export default Navbar