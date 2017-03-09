export default function requestingAnalysisReducer(state = false, action) {
    switch(action.type){
        case 'REQUESTING_ANALYSIS': {
            return true
        }
        case 'ANALYSIS_ERROR':
        case 'RECEIVE_ANALYSIS': {
            return false
        }
        default: {
            return state
        }
    }
}
