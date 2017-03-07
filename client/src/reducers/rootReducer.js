import { combineReducers } from 'redux'
import termsReducer from './termsReducer.js'
import tabsReducer from './tabsReducer.js'
import activeTabIdReducer from './activeTabIdReducer.js'
import activeSyntaxOptionsReducer from './activeSyntaxOptionsReducer.js'
import activePragmaticOptionsReducer from './activePragmaticOptionsReducer.js'
import activeParaphraseOptionsReducer from './activeParaphraseOptionsReducer.js'

const rootReducer = combineReducers({
    terms: termsReducer,
    tabs: tabsReducer,
    activeTabId: activeTabIdReducer,
    activeSyntaxOptions: activeSyntaxOptionsReducer,
    activePragmaticOptions: activePragmaticOptionsReducer,
    activeParaphraseOptions: activeParaphraseOptionsReducer
})

export default rootReducer
