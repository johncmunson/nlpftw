export default function analysisErrorReducer(state = false, action){
    switch(action.type) {
        case 'ANALYSIS_ERROR': {
            return action.error
        }
        case 'RECEIVE_ANALYSIS':
        case 'REQUESTING_ANALYSIS': {
            return false
        }
        default: {
            return state
        }
    }
}
