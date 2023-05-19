import axios from 'axios'
import { 
    GET_ALL_POKEMONS,
    GET_DETAIL,
    GET_TYPES,
    CREATE_POKEMON,
    DELETE_POKEMON,
    NEXT_PAGE,
    PREV_PAGE,
    GET_BY_NAME,
    CLEAN_SEARCH
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

export const getDetail = (id) => {

    const endpoint = `http://localhost:3001/pokemon/${id}`

    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint)

            console.log('detail',data);

            if(!data) throw new Error(`Parece que no quiere salir de su pokebola`)
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
            console.log(error.message);
        }
    }
}

export const createPokemon = (pokemonData) => {

    const endpoint = 'http://localhost:3001/pokemon/create';
  
    return async (dispatch) => {

      try {

        const { data } = await axios.post(endpoint, pokemonData);
        
        return dispatch({

          type: CREATE_POKEMON,
          payload: data,

        });

      } catch (error) {

        console.log('client:',error.response.data.errors);

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
            console.log(error.message);
        }
    }
}

export const clearSearch = () => {
    return {
        type: CLEAN_SEARCH,
        payload: []
    }
}