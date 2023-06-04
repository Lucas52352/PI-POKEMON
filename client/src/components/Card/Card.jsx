import { Link } from 'react-router-dom'
import { deletePokemon, getAllPokemons } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import './Card.css'

const Card = ({ id, name, image, types, createdInDB} ) => {

    const img = image || 'https://pokemonpibucket.s3.us-east-2.amazonaws.com/Screenshot%20from%202023-04-14%2012-37-39.png'
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

            <Link to={`/update/${id}`}>
            <button className='updateBtn' disabled={!createdInDB}> ✎ </button>
            </Link>


            <button onClick={onDelete} className='closeBtn' disabled={!createdInDB}> ✖️ </button>

            </div>
                <Link to={`/detail/${id}`}>

                    <div className='eachCard' key={id}>

                    <h2 className='name'>{name}</h2>

                    <img src={img} alt={name} className='cardImg' />

                    <h4 className='dataCard'>{type}</h4>

                    </div>

                </Link>
            
        </div>
    )
}

export default Card