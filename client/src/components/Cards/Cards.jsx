import Card from "../Card/Card";
import { useSelector } from 'react-redux'
import './Cards.css'
import Paginate from "../Pagination/Pagination";

const Cards = () => {
  const numPage = useSelector((state) => state.numPage);
  const filteredPokemons = useSelector((state) => state.filteredPokemons)
  const allPokemons = useSelector((state) => state.allPokemons)

  let from = (numPage - 1) * 12;
  let to = numPage * 12;

  let cantPages = filteredPokemons.length > 0 ? filteredPokemons.length / 12 : allPokemons.length / 12

  let viewPokemons = filteredPokemons.length > 0 ? filteredPokemons.slice(from, to) : allPokemons.slice(from, to)

  return (
    <div>
            <div>
              <Paginate cantPages={cantPages} />
            </div>

      <div className="cardsContainer">

        {
          (viewPokemons.length === 0) 
          ?  (
            <div className='loading'>
              <img src="https://media.tenor.com/-Uz6xHwMa4gAAAAj/snorlax-snorlax-pokemon.gif" alt="Loading.gif" />
              <p className='data' >Loading...</p>
            </div>
          ) 
          
          :viewPokemons.map((pokemon) => {

          return (
            <div key={pokemon.id}>
              <Card
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.image}
                types={pokemon.types}
                createdInDB={pokemon.createdInDB} 
              />

            </div>
          )

        })}

      </div>

    </div>
  )
}
  
  export default Cards;
  