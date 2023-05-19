import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { getAllPokemons } from "../../redux/actions";
import { useSelector, useDispatch } from 'react-redux'
import './Cards.css'
import Paginate from "../Pagination/Pagination";

const Cards = () => {

    const dispatch = useDispatch()
    const allPokemons = useSelector((state) => state.allPokemons)
    const numPage = useSelector((state) => state.numPage)

    let from = (numPage - 1) * 12
    let to = numPage * 12

    let cantPages = allPokemons.length / 12

    let viewPokemons = allPokemons?.slice(from, to)

    useEffect(() => {
        
        dispatch(getAllPokemons())
        
    }, [dispatch])

    return ( 
        <div>
            
            <div>
                <Paginate cantPages={cantPages}/>
            </div>

            <div className="cardsContainer">

                {viewPokemons?.map(pokemon => {
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

            <div>
                <Paginate cantPages={cantPages}/>
            </div>
                

        </div>
    )
}

export default Cards