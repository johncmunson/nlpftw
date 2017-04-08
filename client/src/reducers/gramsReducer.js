export default function gramsReducer(state = {}, action) {
    switch(action.type){
        case 'RECEIVE_GRAMS': {
            return action.analysis
        }
        case 'GRAMS_ERROR':
        case 'REQUESTING_GRAMS': {
            return {}
        }
        default: {
            return state
        }
    }
}
