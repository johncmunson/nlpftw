export default function activePragmaticOptionsReducer(state = {
    '21': false,
    '22': false,
}, action) {
    switch (action.type) {
        case 'UPDATE_PRAGMATIC_OPTIONS': {
            return {...state, [action.id]: !state[action.id]}
        }
        default: {
            return state
        }
    }
}
