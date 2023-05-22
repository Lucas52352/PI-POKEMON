import Cards from "../Cards/Cards"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { filterBySource, filterByType, getAllPokemons, getTypes, orderAsc, orderAttackAsc, orderAttackDesc, orderDesc } from "../../redux/actions"


const Home = () => {

    const dispatch = useDispatch()
    const types = useSelector((state) => state.allTypes)
    

    useEffect(() => {
        dispatch(getAllPokemons())
        dispatch(getTypes())
    }, [dispatch])

    const handleFilterByType = (type) => {
        dispatch(filterByType(type))
    }

    const handleFilterBySource = (source) => {
        dispatch(filterBySource(source))
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

            {/* FILTRO POR ORIGEN */}
            <label htmlFor="filterBySource">Source:</label>
            <select 
                name="filterBySource"
                id="filterBySource"
                onChange={(event) => handleFilterBySource(event.target.value)}
            >
                <option value="">All</option>
                <option value="api">API</option>
                <option value="db">Database</option>
            </select>

            {/* FILTRO POR TIPO */}
            <label htmlFor="filterByType">Type:</label>
            <select
                name="filterByType"
                id="filterByType"
                onChange={(event) => handleFilterByType(event.target.value)}
            >

                {
                    types?.map(type => {

                        return (
                            <option value={type.name} key={type.id}>{type.name}</option>
                        )
                    })
                }

            </select>

        {/* ORDEN ALFABETICO */}
        <label htmlFor="orderABC">Order by (ABC):</label>
        <select name="orderABC" id="orderABC" onChange={handleOrderABC}>
            <option value="ascendente">A - Z</option>
            <option value="descendente">Z - A</option>
        </select>

        {/* ORDENR POR ATAQUE */}
        <label htmlFor="attack">Order by (Attack)</label>
        <select name="attack" id="attack" onChange={handleOrderAttack}>
            <option value="ascendente">Ascendente</option>
            <option value="descendente">Descendente</option>
        </select>
    
            <Cards />

        </div>
    )
}

export default Home