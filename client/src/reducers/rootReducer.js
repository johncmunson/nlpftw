import { combineReducers } from 'redux'
import analysisReducer from './analysisReducer.js'
import requestingAnalysisReducer from './requestingAnalysisReducer.js'
import analysisErrorReducer from './analysisErrorReducer.js'
import tabsReducer from './tabsReducer.js'
import activeTabIdReducer from './activeTabIdReducer.js'
import activeSyntaxOptionsReducer from './activeSyntaxOptionsReducer.js'
import activeGramOptionsReducer from './activeGramOptionsReducer.js'
import activePragmaticOptionsReducer from './activePragmaticOptionsReducer.js'
import activeParaphraseOptionsReducer from './activeParaphraseOptionsReducer.js'

const rootReducer = combineReducers({
    analysis: analysisReducer,
    requestingAnalysis: requestingAnalysisReducer,
    analysisError: analysisErrorReducer,
    tabs: tabsReducer,
    activeTabId: activeTabIdReducer,
    activeSyntaxOptions: activeSyntaxOptionsReducer,
    activeGramOptions: activeGramOptionsReducer,
    activePragmaticOptions: activePragmaticOptionsReducer,
    activeParaphraseOptions: activeParaphraseOptionsReducer
})

export default rootReducer
