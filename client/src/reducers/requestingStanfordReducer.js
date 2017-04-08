export default function requestingStanfordReducer(state = false, action) {
    switch (action.type) {
        case 'REQUESTING_STANFORD': {
            return true
        }
        case 'STANFORD_ERROR':
        case 'RECEIVE_STANFORD': {
            return false
        }
        default: {
            return state
        }
    }
}
