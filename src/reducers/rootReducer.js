import { combineReducers } from 'redux'
import termsReducer from './termsReducer.js'

const rootReducer = combineReducers({
    terms: termsReducer
})

export default rootReducer
