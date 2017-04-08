export default function requestingGramsReducer(state = false, action) {
    switch (action.type) {
        case 'REQUESTING_GRAMS': {
            return true
        }
        case 'GRAMS_ERROR':
        case 'RECEIVE_GRAMS': {
            return false
        }
        default: {
            return state
        }
    }
}
