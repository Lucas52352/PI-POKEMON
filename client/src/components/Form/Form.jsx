import { useSelector, useDispatch } from "react-redux";
import { getTypes } from "../../redux/actions";
import './Form.css'
import { useEffect, useState } from "react"
import { createPokemon } from "../../redux/actions";
import validation from "../validation";

const Form = () => {

    const dispatch = useDispatch()

    const types = useSelector((state) => state.allTypes)

    const [formData, setFormData] = useState({
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

      const [errors, setErrors] = useState({});

      
    const handleChange = (event) => {

        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })

        setErrors(validation({
            ...formData,
            [event.target.name]: event.target.value
        }))
    }
      

    useEffect(() => {

        dispatch(getTypes())

    }, [dispatch])

    const onPost = (event) => {
        event.preventDefault('')
        dispatch(createPokemon(formData))
    }

    return (

        <div>
            <h2>Create your pokemon:</h2>

            <div className="allForm">
            
                <div className="formA">

                    {/* NAME */}

                    <label htmlFor="name">Name:</label>
                    <input 
                        className="formInput" 
                        type="text" 
                        name="name" 
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}

                    {/* HEALTH */}

                    <label htmlFor="HP">HP:</label>
                    <input 
                        className="formInput" 
                        type="number" 
                        name="HP" 
                        placeholder="HP"
                        onChange={handleChange}
                        value={formData.HP}
                    />

                    {errors.HP && <p style={{color: 'red'}}>{errors.HP}</p>}

                    {/* ARMOR */}

                    <label htmlFor="armor">Armor:</label>
                    <input 
                        className="formInput" 
                        type="number" 
                        name="armor" 
                        placeholder="Armor"
                        onChange={handleChange}
                        value={formData.armor}
                    />

                    {errors.armor && <p style={{color: 'red'}}>{errors.armor}</p>}

                    {/* ATTACK */}

                    <label htmlFor="attack">Attack:</label>
                    <input 
                        className="formInput" 
                        type="number" 
                        name="attack" 
                        placeholder="Attack"
                        onChange={handleChange}
                        value={formData.attack}
                    />

                    {errors.attack && <p style={{color: 'red'}}>{errors.attack}</p>}

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
                        value={formData.height}
                    />

                    {errors.height && <p style={{color: 'red'}}>{errors.height}</p>}

                    {/* WEIGHT */}

                    <label htmlFor="weight">Weight:</label>
                    <input 
                        className="formInput" 
                        type="number" 
                        name="weight" 
                        placeholder="Weight" 
                        onChange={handleChange}
                        value={formData.weight}
                    />

                    {errors.weight && <p style={{color: 'red'}}>{errors.weight}</p>}

                    {/* SPEED */}

                    <label htmlFor="speed">Speed:</label>
                    <input 
                        className="formInput" 
                        type="number" 
                        name="speed"
                        placeholder="Speed" 
                        onChange={handleChange}
                        value={formData.speed}
                    />

                    {errors.speed && <p style={{color: 'red'}}>{errors.speed}</p>}

                    {/* IMAGE */}

                    <label htmlFor="image">Image:</label>
                    <input 
                        className="formInput" 
                        type="url" 
                        name="image" 
                        placeholder="URL-Image" 
                        onChange={handleChange}
                        value={formData.image}
                    />                    
                    
                    {errors.image && <p style={{color: 'red'}}>{errors.image}</p>}

                    {/* TYPES */}

                    <label htmlFor="types">Types:</label>

                    <div className="formTypes">

                        <select 
                            name="types" 
                            className="selector"
                            value={formData.types[0]}
                            onChange={(event) => {
                                setFormData({
                                    ...formData,
                                    types: [event.target.value, formData.types[1]]
                                })
                            }}
                        >
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
                            value={formData.types[1]}
                            onChange={(event) => {
                                setFormData({
                                    ...formData,
                                    types: [formData.types[0], event.target.value]
                                })
                            }}
                        >
                            {
                                types.map(type => {
                                    return (
                                        <option value={type.name}>{type.name}</option>
                                        )
                                })
                            }
                            
                        </select>

                        {errors.types && <p style={{color: 'red'}}>{errors.types}</p>}

                    </div>

                </div>

            </div>

            <button className="formButton" onClick={onPost}>Create</button>

        </div>
    )

}

export default Form