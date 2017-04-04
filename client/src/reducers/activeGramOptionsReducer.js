export default function activeGramOptionsReducer(state = [], action) {
    switch (action.type) {
        case 'UPDATE_ACTIVE_GRAM_OPTIONS': {
            const newState = [...state]
            if (state.includes(action.id)) {
                const index = state.findIndex(id => id === action.id)
                newState.splice(index, 1)
                return newState.sort()
            } else {
                newState.push(action.id)
                return newState.sort()
            }
        }
        default: {
            return state
        }
    }
}
