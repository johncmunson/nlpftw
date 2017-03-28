export default function activeParaphraseOptionsReducer(state = [], action) {
    switch (action.type) {
        case 'UPDATE_ACTIVE_PARAPHRASE_OPTIONS': {
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
