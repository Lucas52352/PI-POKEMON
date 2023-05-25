import axios from 'axios'
import { 
    GET_ALL_POKEMONS,
    GET_POKEMON_BY_ID,
    GET_TYPES,
    CREATE_POKEMON,
    DELETE_POKEMON,
    NEXT_PAGE,
    PREV_PAGE,
    RESET_PAGE,
    GET_BY_NAME,
    CLEAN_SEARCH,
    FILTER_BY_TYPE,
    FILTER_BY_SOURCE,
    ORDER_AZ,
    ORDER_ZA,
    ORDER_ATTACK_ASC,
    ORDER_ATTACK_DESC,
    CLEAN_DETAIL,
    UPDATE_POKEMON
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

export const getPokemonsById = (id) => {

    const endpoint = `http://localhost:3001/pokemon/${id}`

    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint)

            if(!data) throw new Error(`Parece que no quiere salir de su pokebola`)
            return dispatch({
                type: GET_POKEMON_BY_ID,
                payload: data
            })
        }

        catch (error) {
            console.log(error.response);
        }
    }
}

export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL
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
            console.log(error.response);
        }
    }
}

export const createPokemon = (pokemonData) => {

    const endpoint = 'http://localhost:3001/pokemon/create';
  
    return async(dispatch) => {

      try {

        const { data } = await axios.post(endpoint, pokemonData);
        
        return dispatch({

          type: CREATE_POKEMON,
          payload: data,

        });

      } catch (error) {

        console.log('client:',error.response);

      }
    }
}

export const updatePokemon = (id, updateData) => {
    const endpoint = `http://localhost:3001/pokemon/update/${id}`

    console.log('pokemonData:', updateData, 'id:', id)
    return async(dispatch) => {
        try {
            const { data } = await axios.put(endpoint, updateData)

            return dispatch({
                type: UPDATE_POKEMON,
                payload: data
                
            })


        } catch(error) {
            alert('Couldn´t update Pokemom')
        }
    }
}

export const deletePokemon = (id) => {

    const endpoint = `http://localhost:3001/pokemon/delete/${id}`

    return async (dispatch) => {
        try {

            const { data } = await axios.delete(endpoint)

            return dispatch({
                type: DELETE_POKEMON,
                payload: data
            })
            
        } catch (error) {
            alert('Can´t delete pokemons from the API')
        }
    }
} 

export const nextPage = () => {
    return {
        type: NEXT_PAGE
    }
}

export const prevPage = () => {
    return {
        type: PREV_PAGE
    }
}

export const resetPage = () => {
    return {
        type: RESET_PAGE
    }
}


export const getByName = (name) => {

    const endpoint = `http://localhost:3001/pokemon/search/${name}`

    return async (dispatch) => {

        try {

            const { data } = await axios.get(endpoint)

            return dispatch({
                type: GET_BY_NAME,
                payload: data
            })
            
        } catch (error) {
            alert('Pokemon not found')
        }
    }
}

export const clearSearch = () => {

    return {

        type: CLEAN_SEARCH,
        payload: []

    }
}

export const filterByType = (type) => {

    return {
        type: FILTER_BY_TYPE,
        payload: type
    }
}

export const filterBySource = (source) => {

    return {
        type: FILTER_BY_SOURCE,
        payload: source
    }
}

export const orderAsc = () => {
    
    return {
        type: ORDER_AZ,
    }
}

export const orderDesc = () => {
    return {
        type: ORDER_ZA
    }
}

export const orderAttackAsc = () => {
    return {
        type: ORDER_ATTACK_ASC
    }
}

export const orderAttackDesc = () => {
    return {
        type: ORDER_ATTACK_DESC
    }
}
