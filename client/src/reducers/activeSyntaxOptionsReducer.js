export default function activeSyntaxOptionsReducer(state = {
    '23': false,
    '24': false,
    '25': false,
    '26': false,
    '27': false,
    '28': false,
    '29': false,
    '30': false,
    '31': false,
    '32': false,
    '33': false,
    '34': false,
    '35': false,
    '36': false,
    '37': false,
    '38': false,
    '39': false,
    '40': false,
    '41': false,
    '42': false,
    '43': false,
    '44': false,
    '45': false,
    '46': false
}, action) {
    switch (action.type) {
        case 'UPDATE_SYNTAX_OPTIONS': {
            return {...state, [action.id]: !state[action.id]}
        }
        default: {
            return state
        }
    }
}
