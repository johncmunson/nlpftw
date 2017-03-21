import ConnectedSyntaxOptions from '../containers/ConnectedSyntaxOptions.js'
import ConnectedPragmaticOptions from '../containers/ConnectedPragmaticOptions.js'
import ConnectedParaphraseOptions from '../containers/ConnectedParaphraseOptions.js'

export default function tabsReducer(state = [
    {name: 'Syntax/Semantics', id: '2fd4g8', component: ConnectedSyntaxOptions},
    {name: 'Pragmatics/Intent', id: 'ds89wl', component: ConnectedPragmaticOptions},
    {name: 'Paraphrase', id: 'iw984u', component: ConnectedParaphraseOptions}
], action) {
    switch (action.type) {
        default: {
            return state
        }
    }
}
