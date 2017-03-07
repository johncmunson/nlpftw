import React from 'react'
import SyntaxOptions from '../components/SyntaxOptions.js'
import PragmaticOptions from '../components/PragmaticOptions.js'
import ParaphraseOptions from '../components/ParaphraseOptions.js'

export default function tabsReducer(state = [
    {name: 'Syntax/Semantics', id: '2fd4g8', component: <SyntaxOptions />},
    {name: 'Pragmatics/Intent', id: 'ds89wl', component: <PragmaticOptions />},
    {name: 'Paraphrase', id: 'iw984u', component: <ParaphraseOptions />}
], action) {
    switch (action.type) {
        default: {
            return state
        }
    }
}
