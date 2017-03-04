import React from 'react'

const NLPInput = (props) => {
    let input
    return (
        <div>
            <textarea
                ref={node => input = node}
                onChange={() => props.handleContentChange(input.value)}
                type="text"
            >
            </textarea>
            <div>
                <h4>NLP: Sentence Analysis</h4>
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
                <div>
                    <b>Pragmatic Models:</b>
                    <label>
                        <input type='checkbox' />
                        P-Pronoun
                    </label>
                    <label>
                        <input type='checkbox' />
                        P-Determiner
                    </label>
                </div>
            </div>
            <div>
                <h4>NLG: Modify Sentence Structure</h4>
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
        </div>
    )
}

export default NLPInput
