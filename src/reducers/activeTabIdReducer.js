export default function activeTabIdReducer(state = '2fd4g8', action) {
    switch (action.type) {
        case 'UPDATE_ACTIVE_TAB_ID': {
            return action.id
        }
        default: {
            return state
        }
    }
}
