import axios from 'axios'
import { 
    GET_ALL_POKEMONS,
    GET_DETAIL,
    GET_TYPES,
    CREATE_POKEMON,
    DELETE_POKEMON
} from './action-types'

export const getAllPokemons = () => {

    const endpoint = 'http://localhost:3001/pokemon/'
    return async (dispatch) => {
        try {

            const { data } = await axios.get(endpoint)
            if(!data) throw new Error('Hubo un error al traer los pokemons')

            return dispatch({
                type: GET_ALL_POKEMONS,
                payload: data
            })

        }

        catch (error) {
            console.log(error.message);
        }
    }
}

export const getDetail = (name) => {

    const endpoint = `http://localhost:3001/pokemon/search/${name}`

    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint)

            if(!data) throw new Error(`Parece que ${name} no quiere salir de su pokebola`)
            return dispatch({
                type: GET_DETAIL,
                payload: data
            })
        }

        catch (error) {
            console.log(error.message);
        }
    }
}

export const getTypes = () => {

    const endpoint = `http://localhost:3001/types`

    return async (dispatch) => {
        try {

            const { data } = await axios.get(endpoint)

            return dispatch({
                type: GET_TYPES,
                payload: data
            })
            
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const deletePokemon = () => {

    const endpoint = `http://localhost:3001/pokemon/delete/${id}`

    return async (dispatch) => {
        try {

            const { data } = await axios.delete(endpoint)

            return dispatch({
                type: DELETE_POKEMON,
                payload: data
            })
            
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const createPokemon = () => {

    const endpoint = 'http://localhost:3001/pokemon/create'

    return async (dispatch) => {
        try {

            const { data } = await axios.post(endpoint)

            return dispatch({
                type: CREATE_POKEMON,
                payload: data
            })
            
        } catch (error) {
            console.log(error.message);
        }
    }
}