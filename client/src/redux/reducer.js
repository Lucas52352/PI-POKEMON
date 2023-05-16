import { GET_ALL_POKEMONS, GET_DETAIL, CREATE_POKEMON, DELETE_POKEMON, GET_TYPES } from './action-types'

const initialState = {
    allPokemons: [],
    detail: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: payload,
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