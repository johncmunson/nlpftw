import React from 'react'
import OptionsGroup from './OptionsGroup.js'

const data = [
    {
        category: 'Clausal Paraphrase',
        options: ['Independent Clause &#8594; New Sentence', 'New Sentence &#8594; Independent Clause', 'Possessive &#8594; "has a"', '"has a" &#8594; Possessive', '']
    },
    {
        category: 'Syntactic Paraphrase',
        options: ['to Pronoun', 'to Active Voice', 'to Passive Voice', 'to Contraction', 'from Contraction', 'to Gerund Chunk', 'from Gerund Chunk', 'to Cleft', 'from Cleft', 'ADV &#8594; ADVCL', 'ADVCL &#8594; ADV']
    },
    {
        category: 'Semantic Paraphrase',
        options: ['Swap Synonym', '"not" Antonym', 'to Hyponym', 'to Meronym', 'Reduce Compound Modifier']
    }
]

const ParaphraseOptions = (props) => (
    <div>
        {data.map((d, i) => (
            <OptionsGroup data={d} key={i} />
        ))}
    </div>
)

export default ParaphraseOptions
