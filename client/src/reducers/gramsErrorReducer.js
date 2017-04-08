export default function gramsErrorReducer(state = false, action){
    switch (action.type) {
        case 'GRAMS_ERROR': {
            return action.error
        }
        case 'RECEIVE_GRAMS':
        case 'REQUESTING_GRAMS': {
            return false
        }
        default: {
            return state
        }
    }
}
