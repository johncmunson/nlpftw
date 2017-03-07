import React from 'react'

const ParaphraseOptions = (props) => (
    <div>
        <div>
            <b>Clausal Paraphrase:</b>
            <label>
                <input type='checkbox' />
                Independent Clause &#8594; New Sentence
            </label>
            <label>
                <input type='checkbox' />
                New Sentence &#8594; Independent Clause
            </label>
            <label>
                <input type='checkbox' />
                Possessive &#8594; "has a"
            </label>
            <label>
                <input type='checkbox' />
                "has a" &#8594; Possessive
            </label>
        </div>
        <div>
            <b>Syntactic Paraphrase:</b>
            <label>
                <input type='checkbox' />
                to Pronoun
            </label>
            <label>
                <input type='checkbox' />
                to Active Voice
            </label>
            <label>
                <input type='checkbox' />
                to Passive Voice
            </label>
            <label>
                <input type='checkbox' />
                to Contraction
            </label>
            <label>
                <input type='checkbox' />
                from Contraction
            </label>
            <label>
                <input type='checkbox' />
                to Gerund Chunk
            </label>
            <label>
                <input type='checkbox' />
                from Gerund Chunk
            </label>
            <label>
                <input type='checkbox' />
                from Cleft
            </label>
            <label>
                <input type='checkbox' />
                to Cleft
            </label>
            <label>
                <input type='checkbox' />
                ADV &#8594; ADVCL
            </label>
            <label>
                <input type='checkbox' />
                ADVCL &#8594; ADV
            </label>
        </div>
        <div>
            <b>Semantic Paraphrase:</b>
            <label>
                <input type='checkbox' />
                Swap Synonym
            </label>
            <label>
                <input type='checkbox' />
                "not" Antonym
            </label>
            <label>
                <input type='checkbox' />
                to Hyponym
            </label>
            <label>
                <input type='checkbox' />
                to Meronym
            </label>
            <label>
                <input type='checkbox' />
                Reduce Compound Modifier
            </label>
        </div>
    </div>
)

export default ParaphraseOptions
