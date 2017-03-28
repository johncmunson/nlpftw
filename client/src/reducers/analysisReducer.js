export default function analysisReducer(state = {}, action) {
    switch(action.type){
        case 'RECEIVE_ANALYSIS': {
            return {
                google: action.google,
                github: action.github
            }
        }
        case 'ANALYSIS_ERROR':
        case 'REQUESTING_ANALYSIS': {
            return {}
        }
        default: {
            return state
        }
    }
}
