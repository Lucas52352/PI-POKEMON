import { 
    GET_ALL_POKEMONS,
    GET_DETAIL,
    CREATE_POKEMON,
    DELETE_POKEMON,
    GET_TYPES,
    NEXT_PAGE,
    PREV_PAGE,
    GET_BY_NAME,
    CLEAN_SEARCH
} from './action-types'

const initialState = {
    allPokemons: [],
    allTypes: [],
    detail: [],
    pokemonByName: [],
    numPage: 1,
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

        case GET_BY_NAME:
            return {
                ...state,
                pokemonByName: [payload, ...state.pokemonByName]           
            }

        case CLEAN_SEARCH:
            return {
                ...state,
                pokemonByName: payload
            }

        case GET_TYPES:
            return {
                ...state,
                allTypes: payload
            }

        case CREATE_POKEMON:
            return {
                ...state,
                allPokemons: [payload, ...state.allPokemons]
            }

        case DELETE_POKEMON:
            return {
                ...state,
                allPokemons: payload
            }

        case NEXT_PAGE:
            return {
                ...state,
                numPage: state.numPage + 1
            }

        case PREV_PAGE:
            return {
                ...state,
                numPage: state.numPage - 1
            }

        default:
            return {...state}
    }
}

export default reducer