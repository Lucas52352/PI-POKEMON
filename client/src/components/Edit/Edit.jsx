import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom'
import { getTypes, getPokemonsById } from "../../redux/actions";
import './Edit.css'
import { useEffect, useState, useMemo } from "react"
import { updatePokemon} from "../../redux/actions";
import { Link } from "react-router-dom";

const Edit = () => {

    const dispatch = useDispatch()
    const { id } = useParams()

    const types = useSelector((state) => state.allTypes)
    const detail = useSelector((state) => state.detail)

    const [updateData, setUpdateData] = useState({
        name: "",
        HP: 0,
        armor: 0,
        attack: 0,
        height: 0,
        weight: 0,
        speed: 0,
        image: "",
        types: [],
      })

    console.log(updateData.types);
    
    const [success, setSuccess] = useState(null)

    const enabled = useMemo(() => {
        return (
            updateData?.types?.some(type => type)
        )

    }, [updateData.types])

    const handleChange = (event) => {

        setUpdateData({
            ...updateData,
            [event.target.name]: event.target.value,
        })
    }

    useEffect(() => {

        dispatch(getTypes())
        dispatch(getPokemonsById(id))

        setUpdateData(detail)

    }, [dispatch])

    const handleSuccess = () => {
        setSuccess('Pokemon updated successfully!')
    }

    const onUpdate = (event) => {
        event.preventDefault()
        dispatch(updatePokemon(id, updateData))
        dispatch(getPokemonsById(id))
        handleSuccess()
    }

    return (

        <div className="updateData">

            <div className="titleForm">
                <h2>Update {detail.name}</h2>
            </div>

            <div className="allForm">
            
                <div className="formA">

                    {/* NAME */}

                    <label htmlFor="name">Name:</label>
                    <input 
                        className="formInput" 
                        type="text" 
                        name="name" 
                        placeholder="Name"
                        value={updateData.name}
                        onChange={handleChange}
                    />

                    {/* HEALTH */}

                    <label htmlFor="HP">HP:</label>
                    <input 
                        className="formInput" 
                        type="number" 
                        name="HP" 
                        placeholder="HP"
                        onChange={handleChange}
                        value={updateData.HP}
                    />


                    {/* ARMOR */}

                    <label htmlFor="armor">Armor:</label>
                    <input 
                        className="formInput" 
                        type="number" 
                        name="armor" 
                        placeholder="Armor"
                        onChange={handleChange}
                        value={updateData.armor}
                    />


                    {/* ATTACK */}

                    <label htmlFor="attack">Attack:</label>
                    <input 
                        className="formInput" 
                        type="number" 
                        name="attack" 
                        placeholder="Attack"
                        onChange={handleChange}
                        value={updateData.attack}
                    />


                </div>

                <div className="formB">

                    {/* HEIGHT */}
                    
                    <label htmlFor="height">Height:</label>
                    <input 
                        className="formInput" 
                        type="number" 
                        name="height" 
                        placeholder="Height" 
                        onChange={handleChange}
                        value={updateData.height}
                    />


                    {/* WEIGHT */}

                    <label htmlFor="weight">Weight:</label>
                    <input 
                        className="formInput" 
                        type="number" 
                        name="weight" 
                        placeholder="Weight" 
                        onChange={handleChange}
                        value={updateData.weight}
                    />


                    {/* SPEED */}

                    <label htmlFor="speed">Speed:</label>
                    <input 
                        className="formInput" 
                        type="number" 
                        name="speed"
                        placeholder="Speed" 
                        onChange={handleChange}
                        value={updateData.speed}
                    />


                    {/* IMAGE */}

                    <label htmlFor="image">Image:</label>
                    <input 
                        className="formInput" 
                        type="url" 
                        name="image" 
                        placeholder="select your file" 
                        onChange={handleChange}
                        value={updateData.image}
                    />                    
                    

                    {/* TYPES */}


                    </div>

                </div>
                    <label htmlFor="types">Types:</label>

                    <div className="formTypes">

                        <select 
                            name="types" 
                            className="selector"
                            value={updateData?.types?.[0] || null}
                            onChange={(event) => {
                                setUpdateData({
                                    ...updateData,
                                    types: [event.target.value, updateData?.types?.[1]]
                                })
                            }}
                        >

                            <option value=""> - </option>

                            {
                                types.map(type => {
                                    return (
                                        <option value={type.id} key={type.id}>{type.name}</option>
                                    )
                                })
                            }
                            
                        </select>

                        <select 
                            name="types" 
                            className="selector"
                            value={updateData?.types?.[1] || null}
                            onChange={(event) => {
                                setUpdateData({
                                    ...updateData,
                                    types: [updateData?.types?.[0], event.target.value]
                                })
                            }}
                        >

                            <option value=""> - </option>

                            {
                                types.map(type => {
                                    return (
                                        <option value={type.id} key={type.id}>{type.name}</option>
                                        )
                                })
                            }
                            
                        </select>


            </div>


            {success !== null && <p style={{ color: 'green'}}>{success}</p>}

            <Link to='/home'>
                <button className="formButton" onClick={onUpdate} disabled={!enabled} >Update</button>
            </Link>

        </div>
    )

}

export default Edit