export default function stanfordErrorReducer(state = false, action){
    switch(action.type) {
        case 'STANFORD_ERROR': {
            return action.error
        }
        case 'RECEIVE_STANFORD':
        case 'REQUESTING_STANFORD': {
            return false
        }
        default: {
            return state
        }
    }
}
