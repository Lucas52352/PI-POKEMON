import { Link } from "react-router-dom"
import img from '../../Images/pokemon.png'
import './Navbar.css'


const Navbar = () => {
    return (
        <header className="navBar">

            <div className="navHead">
                <h1 className="title">YOUR POKEDEX</h1>
                <img className="navImg" src={img} alt="pokemon" />
            </div>

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