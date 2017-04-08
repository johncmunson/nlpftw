export default function googleErrorReducer(state = false, action){
    switch(action.type) {
        case 'GOOGLE_ERROR': {
            return action.error
        }
        case 'RECEIVE_GOOGLE':
        case 'REQUESTING_GOOGLE': {
            return false
        }
        default: {
            return state
        }
    }
}
