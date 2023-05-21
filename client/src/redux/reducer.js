import { 
    GET_ALL_POKEMONS,
    CREATE_POKEMON,
    DELETE_POKEMON,
    GET_TYPES,
    NEXT_PAGE,
    PREV_PAGE,
    GET_BY_NAME,
    CLEAN_SEARCH,
    GET_POKEMON_BY_ID
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

        case GET_POKEMON_BY_ID:
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
                detail: payload,
                allPokemons: [payload, ...state.allPokemons]
            }

        case DELETE_POKEMON:

            const filtered = state.allPokemons.filter(pokemon => pokemon.id !== payload.id)

            return {
                ...state,
                allPokemons: filtered
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