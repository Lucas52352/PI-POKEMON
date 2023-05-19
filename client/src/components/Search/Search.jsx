import { useSelector } from "react-redux";
import Searchbar from "../Searchbar/Searchbar";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

const Search = () => {

    const pokemonSearch = useSelector((state) => state.pokemonByName)

    const pokemonId = pokemonSearch.map(pokemon => pokemon.id)

    return (
        <div className="search">
                <Searchbar />

                <div className="eachCard">

            
                        {
                            pokemonSearch?.map(pokemon => {
                                return (
                                    <Link to={`/detail/${pokemonId}`}>
                                        <div key={pokemonId}>
                                            <Card
                                                id={pokemonId}
                                                name={pokemon.name}
                                                image={pokemon.image}
                                                types={pokemon.types}
                                            />
                                        </div>
                                    </Link>
                                )
                            })
                        }


                </div>
        </div>
    )

}

export default Search