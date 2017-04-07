import ConnectedSyntaxOptions from '../containers/ConnectedSyntaxOptions.js'
import ConnectedGramOptions from '../containers/ConnectedGramOptions.js'
import ConnectedPragmaticOptions from '../containers/ConnectedPragmaticOptions.js'
import ConnectedParaphraseOptions from '../containers/ConnectedParaphraseOptions.js'

export default function tabsReducer(state = [
    {name: 'Syntax/Semantics', id: '2fd4g8', component: ConnectedSyntaxOptions},
    {name: 'N-Grams', id: '98uDF4', component: ConnectedGramOptions},
    {name: 'Pragmatics', id: 'ds89wl', component: ConnectedPragmaticOptions},
    {name: 'Paraphrase', id: 'iw984u', component: ConnectedParaphraseOptions}
], action) {
    switch (action.type) {
        default: {
            return state
        }
    }
}
