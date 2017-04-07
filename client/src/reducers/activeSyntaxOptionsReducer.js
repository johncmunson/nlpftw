export default function activeSyntaxOptionsReducer(state = ['24', '25', '250', '27', '28', '29', '330'], action) {
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
