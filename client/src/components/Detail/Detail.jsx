import { useEffect } from "react"
import { getPokemonsById } from "../../redux/actions"
import { useSelector, useDispatch } from "react-redux"
import { Link, useParams } from "react-router-dom"
import './Detail.css'

const Detail = () => {

    const dispatch = useDispatch()
    const detail = useSelector(store => store.detail)
    const { id } = useParams()

    const types = detail.types?.join(' - ')

    useEffect(() => {

        dispatch(getPokemonsById(id))

    }, [dispatch, id])

    return (
        <div className="allDetail">
        
            <div className="buttons">

                <div className="detailBtn">
                    <Link to='/home'>   
                        <button className="eachBtn"> ⤌ Go Home</button>
                    </Link>
                </div>

                <div className="detailBtn">
                    <Link to='/search'>
                        <button className="eachBtn">  Go Search ⤍ </button>
                    </Link>
                </div>


            </div>


            <div className="allCard">

                <div className="detailCard">


                    <h2 className="cardItem">{detail.name}</h2>
                    <img className="cardImg" src={detail.image} alt={detail.name} />
                  

                </div>

                <div className="detailCard2">

                    <p className="cardItem">❤️: {detail.HP}</p>
                    <p className="cardItem">⚔️: {detail.attack}</p>
                    <p className="cardItem">🛡️: {detail.armor}</p>
                    
                </div>

                <div className="detailCard3">

                    <p className="cardItem">🏃🏽: {detail.speed}</p>
                    <p className="cardItem">📏: {detail.height}</p>
                    <p className="cardItem">⚖️: {detail.weight}</p>

                </div>
                    <p>🧬: {types}</p>
            </div>
            
        </div>
    )
}

export default Detail