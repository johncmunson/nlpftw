export default function activePragmaticOptionsReducer(state = [], action) {
    switch (action.type) {
        case 'UPDATE_ACTIVE_PRAGMATIC_OPTIONS': {
            const newState = [...state]
            if (state.includes(action.id)) {
                const index = state.findIndex(id => id === action.id)
                newState.splice(index, 1)
                return newState
            } else {
                newState.push(action.id)
                return newState
            }
        }
        default: {
            return state
        }
    }
}
