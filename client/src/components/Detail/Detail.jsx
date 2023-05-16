import { useEffect } from "react"
import { getDetail } from "../../redux/actions"
import { useSelector, useDispatch } from "react-redux"
import { Link, useParams } from "react-router-dom"
import './Detail.css'

const Detail = () => {

    const dispatch = useDispatch()
    const detail = useSelector(store => store.detail)
    const { id } = useParams()

    useEffect(() => {

        dispatch(getDetail(id))

    }, [dispatch, id])

    return (
        <div>
            <Link to='/home'>
                <button className="detailBtn">Go Back</button>
            </Link>
            <div className="detailCard">
                <h2>{detail.name}</h2>
                <img src={detail.image} alt={detail.name} />
                <p>❤️: {detail.HP}</p>
                <p>⚔️: {detail.attack}</p>
                <p>🛡️: {detail.armor}</p>
                <p>⚡: {detail.speed}</p>
                <p>📏: {detail.height}</p>
                <p>⚖️: {detail.weight}</p>
                <p>🧬: {detail.types}</p>
            </div>
            
        </div>
    )
}

export default Detail