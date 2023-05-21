import { Link } from 'react-router-dom'
import { deletePokemon } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import './Card.css'

const Card = ({ id, name, image, types} ) => {

    const dispatch = useDispatch()
    const type = types?.join(' - ')

        
    const onClick = (event) => {

        event.preventDefault()
        dispatch(deletePokemon(id))

    }

    return (

        <div className='cardContainer'>

            <button onClick={onClick} className='closeBtn'> X </button>
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