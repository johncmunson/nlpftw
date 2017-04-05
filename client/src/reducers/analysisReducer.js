export default function analysisReducer(state = {}, action) {
    switch(action.type){
        case 'RECEIVE_ANALYSIS': {
            return {
                google: action.google,
                namedEntities: action.namedEntities,
                // genders: action.genders,
                grams: action.grams
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
