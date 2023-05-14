import { GET_ALL_POKEMONS, GET_DETAIL, GET_TYPES, CREATE_POKEMON, DELETE_POKEMON } from './action-types'

const initialState = {
    allPokemons: [],
    allTypes: [],
    detail: {}
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: payload
            }

        case GET_TYPES:
            return {
                ...state,
                allTypes: payload
            }

        case GET_DETAIL:
            return {
                ...state,
                detail: payload
            }

        case CREATE_POKEMON:
            return {
                ...state,
                allPokemons: payload
            }

        case DELETE_POKEMON:
            return {
                ...state,
                allPokemons: payload
            }

        default:
            return {...state}
    }
}

export default reducer