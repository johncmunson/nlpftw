export default function requestingGoogleReducer(state = false, action) {
    switch (action.type) {
        case 'REQUESTING_GOOGLE': {
            return true
        }
        case 'GOOGLE_ERROR':
        case 'RECEIVE_GOOGLE': {
            return false
        }
        default: {
            return state
        }
    }
}
