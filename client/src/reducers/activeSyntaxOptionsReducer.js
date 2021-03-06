export default function activeSyntaxOptionsReducer(state = ['24', '240', '25', '250', '251', '27', '270', '28', '29', '290'], action) {
    switch (action.type) {
        case 'UPDATE_ACTIVE_SYNTAX_OPTIONS': {
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
