import Cards from "../Cards/Cards"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { filterBySource, filterByType, getAllPokemons, getTypes, orderAsc, orderAttackAsc, orderAttackDesc, orderDesc, resetPage } from "../../redux/actions"
import './Home.css'


const Home = () => {

    const dispatch = useDispatch()
    const types = useSelector((state) => state.allTypes)

    useEffect(() => {
        dispatch(getAllPokemons())
        dispatch(getTypes())
    }, [dispatch])

    const handleFilterByType = (type) => {
        dispatch(filterByType(type))
        dispatch(resetPage())
    }

    const handleFilterBySource = (source) => {
        dispatch(filterBySource(source))
        dispatch(resetPage())
    }

    const handleOrderABC = (event) => {
        const selected = event.target.value

        if(selected === 'ascendente') dispatch(orderAsc())
        if(selected === 'descendente') dispatch(orderDesc())
    }

    const handleOrderAttack = (event) => {
        const selected = event.target.value

        if(selected === 'ascendente') dispatch(orderAttackAsc())
        if(selected === 'descendente') dispatch(orderAttackDesc())
    }

    return (
        <div>

            <div className="homeBody">

                <div className="sorter">
                {/* FILTRO POR ORIGEN */}

                    <label className="label" htmlFor="filterBySource">Source:</label>
                    <select 
                        name="filterBySource"
                        className="filter"
                        id="filterBySource"
                        onChange={(event) => handleFilterBySource(event.target.value)}
                        >
                        <option className="homeOption" value="">Any</option>
                        <option className="homeOption" value="api">API</option>
                        <option className="homeOption" value="db">Database</option>
                    </select>

                </div>

                <div className="sorter">

                    {/* FILTRO POR TIPO */}
                    <label className="label" htmlFor="filterByType">Type:</label>
                    <select
                        name="filterByType"
                        className="filter"
                        id="filterByType"
                        onChange={(event) => handleFilterByType(event.target.value)}
                        >

                        <option value="">Any</option>

                        {
                            types?.map(type => {

                                return (
                                    <option className="homeOption" value={type.name} key={type.id}>{type.name}</option>
                                    )
                                })
                        }
                    </select>

                </div>

                <div className="sorter">
                    {/* ORDEN ALFABETICO */}
                    <label className="label" htmlFor="orderABC">Order by (ABC):</label>
                    <select className="filter" name="orderABC" id="orderABC" onChange={handleOrderABC}>
                        <option value=""> - </option>
                        <option className="homeOption" value="ascendente">A - Z</option>
                        <option className="homeOption" value="descendente">Z - A</option>
                    </select>
                </div>

                    
                <div className="sorter">
                    {/* ORDENR POR ATAQUE */}
                    <label className="label" htmlFor="attack">Order by (Attack)</label>

                    <select className="filter" name="attack" id="attack" onChange={handleOrderAttack}>
                        <option value=""> - </option>
                        <option className="homeOption" value="ascendente">Lowest</option>
                        <option className="homeOption" value="descendente">Highest</option>
                    </select>
                </div>

            </div>
        
            <div>
                <Cards />
            </div>
        </div>  

    )
}

export default Home