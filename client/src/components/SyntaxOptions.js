import React from 'react'
import OptionsGroup from './OptionsGroup.js'

const data = [
    {
        category: 'Sentence & Clause',
        options: ['Snip Sentence', 'Show Tokens', 'Part-of-Speech', 'Shallow Parse Chunker', 'Grammar/Dependency Parse', 'Propositions']
    },
    {
        category: 'Word Level',
        options: ['Lemma', 'Stem', 'Named Entities', 'Quantities', 'Coreference']
    },
    {
        category: 'Semantic Relations',
        options: ['Word Sense', 'Hyponyms', 'Hypernyms', 'Meronyms', 'Holonyms', 'Synonyms', 'Antonyms', 'Verb Frames']
    },
    {
        category: 'Language Models',
        options: ['2-Gram', '3-Gram', '4-Gram', '5-Gram', 'Hyper2-Gram']
    }
]

const SyntaxOptions = (props) => (
    <div>
        {data.map((d, i) => (
            <OptionsGroup data={d} key={i} />
        ))}
    </div>
)

export default SyntaxOptions
