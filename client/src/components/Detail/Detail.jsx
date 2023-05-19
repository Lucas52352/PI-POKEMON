import { useEffect } from "react"
import { getDetail } from "../../redux/actions"
import { useSelector, useDispatch } from "react-redux"
import { Link, useParams } from "react-router-dom"
import './Detail.css'

const Detail = () => {

    const dispatch = useDispatch()
    const detail = useSelector(store => store.detail)
    const { id } = useParams()

    console.log(detail);

    const types = detail.types?.join(' - ')

    useEffect(() => {

        dispatch(getDetail(id))

    }, [dispatch, id])

    return (
        <div className="detail">
        
            <div className="buttons">

                <Link to='/home'>   
                    <button className="detailBtn"> ⤌ Go Home</button>
                </Link>

                <Link to='/search'>
                    <button className="detailBtn">  Go Search ⤍ </button>
                </Link>

            </div>


            <div className="allCard">

                <div className="detailCard">

                    <h2 className="cardItem">{detail.name}</h2>
                    <img className="cardItem" src={detail.image} alt={detail.name} />
                  

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