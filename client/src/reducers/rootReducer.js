import { combineReducers } from 'redux'
import termsReducer from './termsReducer.js'
import tabsReducer from './tabsReducer.js'
import activeTabIdReducer from './activeTabIdReducer.js'

const rootReducer = combineReducers({
    terms: termsReducer,
    tabs: tabsReducer,
    activeTabId: activeTabIdReducer
})

export default rootReducer
