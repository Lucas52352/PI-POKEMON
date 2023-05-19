import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({ id, name, image, types} ) => {

    const type = types?.join(' - ')

    return (

        <div className='cardContainer'>

            <Link to={`/detail/${id}`}>

                <div key={id}>

                <h2>{name}</h2>

                <img src={image} alt={name} className='cardImg' />

                <h4>{type}</h4>

                </div>

            </Link>
            
        </div>
    )
}

export default Card