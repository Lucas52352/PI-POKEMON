import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <h1>Navbar</h1>

            <Link to='/home' >
                <button>HOME</button>
            </Link>

            <Link to='/detail/:name'>
                <button>DETAIL</button>
            </Link>

            <Link to='/team'>
                <button>TEAM</button>
            </Link>

            <Link to='/'>
                <button>LOG OUT</button>
            </Link>
        </div>
    )
}

export default Navbar