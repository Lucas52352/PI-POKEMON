import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { getAllPokemons, getTypes } from "../../redux/actions";
import { useSelector, useDispatch } from 'react-redux'
import './Cards.css'

const Cards = () => {

    const dispatch = useDispatch()
    const [loading, setIsLoading] = useState(true)
    const allPokemons = useSelector((state) => state.allPokemons)

    useEffect(() => {
        
        dispatch(getTypes())
        dispatch(getAllPokemons()).then(() => setIsLoading(false))
        
    }, [dispatch])

    return (
        <div className="cardsContainer">
            {allPokemons.map(pokemon => {
                return (
                    <div key={pokemon.id}>
                        <Card
                            id={pokemon.id}
                            name={pokemon.name}
                            image={pokemon.image}
                            types={pokemon.types}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Cards