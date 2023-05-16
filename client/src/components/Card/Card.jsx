import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({ id, name, image, types} ) => {

const newName = name.charAt(0).toUpperCase() + name.slice(1)

    return (

        <div className='cardContainer'>

            <Link to={`/detail/${id}`}>

                <div>

                <h2>{newName}</h2>

                <img src={image} alt={name} />

                <h4>{types}</h4>

                </div>

            </Link>
            
        </div>
    )
}

export default Card