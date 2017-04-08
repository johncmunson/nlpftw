export default function googleReducer(state = {}, action) {
    switch(action.type){
        case 'RECEIVE_GOOGLE': {
            return action.analysis
        }
        case 'GOOGLE_ERROR':
        case 'REQUESTING_GOOGLE': {
            return {}
        }
        default: {
            return state
        }
    }
}
