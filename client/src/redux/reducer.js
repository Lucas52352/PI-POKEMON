import { 
    GET_ALL_POKEMONS,
    CREATE_POKEMON,
    DELETE_POKEMON,
    GET_TYPES,
    NEXT_PAGE,
    PREV_PAGE,
    GET_BY_NAME,
    CLEAN_SEARCH,
    GET_POKEMON_BY_ID,
    FILTER_BY_TYPE,
    FILTER_BY_SOURCE,
    ORDER_AZ,
    ORDER_ZA,
    ORDER_ATTACK_ASC,
    ORDER_ATTACK_DESC,
    RESET_PAGE,
    CLEAN_DETAIL,
    UPDATE_POKEMON
} from './action-types'

const initialState = {
    allPokemons: [],
    allTypes: [],
    detail: [],
    pokemonByName: [],
    filteredPokemons: [],
    numPage: 1
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: payload,
                filteredPokemons: payload
            }

        case GET_POKEMON_BY_ID:
            return {
                ...state,
                detail: payload
            }

        case CLEAN_DETAIL:
            return {
                ...state,
                detail: []
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

        case UPDATE_POKEMON:

            const updatedAllPokemons = state.allPokemons.map(pokemon => {
                if(pokemon.id === payload.id) return payload

                return pokemon
            })

        return {
            ...state,
            allPokemons: updatedAllPokemons
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

        case RESET_PAGE:
            return {
                ...state,
                numPage: 1
            }

        case FILTER_BY_TYPE:

            const filterByType = state.allPokemons.filter((pokemon) => {

                const pokemonTypes = pokemon.types.map((type) => type)

                return pokemonTypes.includes(payload)

            })
            
            return {
                ...state,
                filteredPokemons: filterByType,
            }

        case FILTER_BY_SOURCE:

            const filterBySource = state.allPokemons.filter(pokemon => {

                if (payload === 'api') {

                return pokemon.createdInDB === false

                } else if (payload === 'db') {

                return pokemon.createdInDB === true

                }

                return true
            })
            
            return {
                ...state,
                filteredPokemons: filterBySource
            }

        case ORDER_AZ:

            const orderAsc = [...state.filteredPokemons].sort((a, b) => {
                if(a.name < b.name) return -1
                if(a.name > b.name) return 1
                return 0
            })
           

            return {
                ...state,
                filteredPokemons: orderAsc
            }

        case ORDER_ZA:
            const orderDesc = [...state.filteredPokemons].sort((a, b) => {
                if(a.name > b.name) return -1
                if(a.name < b.name) return 1
                return 0
            })
            return {
                ...state,
                filteredPokemons: orderDesc
            }

        case ORDER_ATTACK_ASC:
            const orderAttackAsc = [...state.filteredPokemons].sort((a, b) => {
                return a.attack - b.attack
            })
            
            return {
                ...state,
                filteredPokemons: orderAttackAsc
            }
            
        case ORDER_ATTACK_DESC:
            const orderAttackDesc = [...state.filteredPokemons].sort((a, b) => {
                return b.attack - a.attack
            })
            
            return {
                ...state,
                filteredPokemons: orderAttackDesc
            }
              
        
        default:
            return {...state}
    }
}

export default reducer