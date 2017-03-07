import React from 'react'

const SyntaxOptions = (props) => (
    <div>
        <div>
            <b>Sentence & Clause:</b>
            <label>
                <input type='checkbox' />
                Snip Sentence
            </label>
            <label>
                <input type='checkbox' />
                Show Tokens
            </label>
            <label>
                <input type='checkbox' />
                Part-of-Speech
            </label>
            <label>
                <input type='checkbox' />
                Shallow Parse Chunker
            </label>
            <label>
                <input type='checkbox' />
                Grammer/Dependency Parse
            </label>
            <label>
                <input type='checkbox' />
                Propositions
            </label>
        </div>
        <div>
            <b>Word Level:</b>
            <label>
                <input type='checkbox' />
                Lemma
            </label>
            <label>
                <input type='checkbox' />
                Stem
            </label>
            <label>
                <input type='checkbox' />
                Named Entities
            </label>
            <label>
                <input type='checkbox' />
                Quantities
            </label>
            <label>
                <input type='checkbox' />
                Coreference
            </label>
        </div>
        <div>
            <b>Semantic Relations:</b>
            <label>
                <input type='checkbox' />
                Word Sense
            </label>
            <label>
                <input type='checkbox' />
                Hyponyms
            </label>
            <label>
                <input type='checkbox' />
                Hypernyms
            </label>
            <label>
                <input type='checkbox' />
                Meronyms
            </label>
            <label>
                <input type='checkbox' />
                Holonyms
            </label>
            <label>
                <input type='checkbox' />
                Synonyms
            </label>
            <label>
                <input type='checkbox' />
                Antonyms
            </label>
            <label>
                <input type='checkbox' />
                Verb Frames
            </label>
        </div>
        <div>
            <b>Language Models:</b>
            <label>
                <input type='checkbox' />
                2-Gram
            </label>
            <label>
                <input type='checkbox' />
                3-Gram
            </label>
            <label>
                <input type='checkbox' />
                4-Gram
            </label>
            <label>
                <input type='checkbox' />
                5-Gram
            </label>
            <label>
                <input type='checkbox' />
                Hyper2-Gram
            </label>
        </div>
    </div>
)

export default SyntaxOptions
