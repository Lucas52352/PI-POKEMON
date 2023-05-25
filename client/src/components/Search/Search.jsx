import { useSelector } from "react-redux";
import Searchbar from "../Searchbar/Searchbar";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

const Search = () => {

    const pokemonSearch = useSelector((state) => state.pokemonByName)


    return (
        <div className="search">

                <Searchbar />

                <div className="eachCard">
            
                    {

                       pokemonSearch?.map(pokemon => {

                                return (

                                    <div>

                                        <div key={pokemon.id}>

                                            <Link to={`/detail/${pokemon.id}`}>

                                                <Card
                                                    id={pokemon.id}
                                                    name={pokemon.name}
                                                    image={pokemon.image}
                                                    types={pokemon.types}
                                                />

                                            </Link>
                                        </div>

                                    </div>
                                )
                            })
                    }


                </div>
        </div>
    )

}

export default Search