export default function termsReducer(state = [], action) {
    switch (action.type) {
        case 'UPDATE_TERMS': {
            return action.content.split(' ')
        }
        default: {
            return state
        }
    }
}
