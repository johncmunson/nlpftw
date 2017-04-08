import { combineReducers } from 'redux'
import googleReducer from './googleReducer.js'
import requestingGoogleReducer from './requestingGoogleReducer.js'
import googleErrorReducer from './googleErrorReducer.js'
import gramsReducer from './gramsReducer.js'
import requestingGramsReducer from './requestingGramsReducer.js'
import gramsErrorReducer from './gramsErrorReducer.js'
import tabsReducer from './tabsReducer.js'
import activeTabIdReducer from './activeTabIdReducer.js'
import activeSyntaxOptionsReducer from './activeSyntaxOptionsReducer.js'
import activeGramOptionsReducer from './activeGramOptionsReducer.js'
import activePragmaticOptionsReducer from './activePragmaticOptionsReducer.js'
import activeParaphraseOptionsReducer from './activeParaphraseOptionsReducer.js'

const rootReducer = combineReducers({
    google: googleReducer,
    requestingGoogle: requestingGoogleReducer,
    googleError: googleErrorReducer,
    grams: gramsReducer,
    requestingGrams: requestingGramsReducer,
    gramsError: gramsErrorReducer,
    tabs: tabsReducer,
    activeTabId: activeTabIdReducer,
    activeSyntaxOptions: activeSyntaxOptionsReducer,
    activeGramOptions: activeGramOptionsReducer,
    activePragmaticOptions: activePragmaticOptionsReducer,
    activeParaphraseOptions: activeParaphraseOptionsReducer
})

export default rootReducer
