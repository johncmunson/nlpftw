export default function stanfordReducer(state = {}, action) {
    switch(action.type){
        case 'RECEIVE_STANFORD': {
            return action.analysis
        }
        case 'STANFORD_ERROR':
        case 'REQUESTING_STANFORD': {
            return {}
        }
        default: {
            return state
        }
    }
}
