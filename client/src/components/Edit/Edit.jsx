import { useSelector, useDispatch } from "react-redux";
import { getTypes, getAllPokemons } from "../../redux/actions";
import './Edit.css'
import { useEffect, useState } from "react"
import { updatePokemon} from "../../redux/actions";

const Edit = () => {

    const dispatch = useDispatch()

    const types = useSelector((state) => state.allTypes)
    const allPokemons = useSelector((state) => state.allPokemons)

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

    const [success, setSuccess] = useState(null)

    const handleChange = (event) => {

        setUpdateData({
            ...updateData,
            [event.target.name]: event.target.value,
        })
    }

    const currentPokemon = (selectedPokemon) => {

        const pokemonToUpdate = allPokemons.find(pokemon => pokemon.id === selectedPokemon.id)

        if(pokemonToUpdate){
            setUpdateData({
                name: pokemonToUpdate.name,
                HP: pokemonToUpdate.HP,
                armor: pokemonToUpdate.armor,
                attack: pokemonToUpdate.attack,
                height: pokemonToUpdate.height,
                weight: pokemonToUpdate.weight,
                speed: pokemonToUpdate.speed,
                image: pokemonToUpdate.image,
                types: pokemonToUpdate.types,
            })
        }
    }
      

    useEffect(() => {

        dispatch(getTypes())
        dispatch(getAllPokemons())

    }, [dispatch])

    const handleSuccess = () => {
        setSuccess('Pokemon updated successfully!')
        clearForm()
    }

    const onUpdate = (event) => {
        event.preventDefault()
        dispatch(updatePokemon(updateData))
        handleSuccess()
    }

    return (

        <div className="updateData">

            <div className="titleForm">
                <h2>Update {updateData.name}</h2>
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
                            value={updateData.types[0]}
                            onChange={(event) => {
                                setUpdateData({
                                    ...updateData,
                                    types: [event.target.value, updateData.types[1]]
                                })
                            }}
                        >

                            <option value=""> - </option>

                            {
                                types.map(type => {
                                    return (
                                        <option value={type.name} key={type.id}>{type.name}</option>
                                    )
                                })
                            }
                            
                        </select>

                        <select 
                            name="types" 
                            className="selector"
                            value={updateData.types[1]}
                            onChange={(event) => {
                                setUpdateData({
                                    ...updateData,
                                    types: [updateData.types[0], event.target.value]
                                })
                            }}
                        >

                            <option value=""> - </option>

                            {
                                types.map(type => {
                                    return (
                                        <option value={type.name} key={type.id}>{type.name}</option>
                                        )
                                })
                            }
                            
                        </select>


            </div>


            {success !== null && <p style={{ color: 'green'}}>{success}</p>}
            <button className="formButton" onClick={onUpdate}>Create</button>

        </div>
    )

}

export default Edit