import { Link } from 'react-router-dom'
import { deletePokemon, getAllPokemons } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import './Card.css'

const Card = ({ id, name, image, types} ) => {

    const dispatch = useDispatch()
    const type = types?.join(' - ')

        
    const onDelete = (event) => {

        event.preventDefault()
        dispatch(deletePokemon(id))
        dispatch(getAllPokemons())

    }

    return (

        <div className='cardContainer'>

            <div className='cardButtons'>

            <button className='updateBtn'> ✎ </button>
            <button onClick={onDelete} className='closeBtn'> X </button>

            </div>
                <Link to={`/detail/${id}`}>

                    <div className='eachCard' key={id}>

                    <h2 className='name'>{name}</h2>

                    <img src={image} alt={name} className='cardImg' />

                    <h4 className='dataCard'>{type}</h4>

                    </div>

                </Link>
            
        </div>
    )
}

export default Card