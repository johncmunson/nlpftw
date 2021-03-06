import React from 'react'
import styled from 'styled-components'

const Sm = styled.span`
    font-size: 0.8em;
`

const renderRow = {
    // Snip Sentence
    23: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    // Google Tokens
    // ** the corresponding checkbox is currently hidden
    // ** and set to active in the reducer
    24: function(analysis) {
        return (
            <tr>
                <td><b>Tokens</b><br/><Sm>(Google)</Sm></td>
                {analysis.google.data[1].tokens.map((t, i) => (
                    <td key={i}>
                        {t.text.content}
                    </td>
                ))}
            </tr>
        )
    },
    // Stanford Tokens
    240: function(analysis) {
        if (analysis.stanford.data) {
            const stanford = analysis.stanford.data
            const tokens = []
            for (let s = 0; s < stanford.sentences.length; s++) {
                for (let t = 0; t < stanford.sentences[s].tokens.length; t++) {
                    tokens.push(stanford.sentences[s].tokens[t].originalText)
                }
            }
            return (
                <tr>
                    <td><b>Tokens</b><br/><Sm>(Stanford)</Sm></td>
                    {tokens.map((t, i) => (
                        <td key={i}>
                            {t}
                        </td>
                    ))}
                </tr>
            )
        } else {
            return (
                <tr>
                    <td><b>Tokens</b><br/><Sm>(Stanford)</Sm></td>
                    <td colSpan={analysis.google.data[1].tokens.length.toString()}>
                        analyzing...
                    </td>
                </tr>
            )
        }
    },
    // Google POS
    25: function(analysis) {
        return (
            <tr>
                <td><b>Part Of Speech</b><br/><Sm>(Google)</Sm></td>
                {analysis.google.data[1].tokens.map((t, i) => (
                    <td key={i}>
                        {t.partOfSpeech.tag}
                    </td>
                ))}
            </tr>
        )
    },
    // Stanford POS
    250: function(analysis) {
        if (analysis.stanford.data) {
            const stanford = analysis.stanford.data
            let pos = []
            for (let s = 0; s < stanford.sentences.length; s++) {
                for (let t = 0; t < stanford.sentences[s].tokens.length; t++) {
                    pos.push(stanford.sentences[s].tokens[t].pos)
                }
            }
            return (
                <tr>
                    <td><b>Part Of Speech</b><br/><Sm>(Stanford)</Sm></td>
                    {pos.map((p, i) => (
                        <td key={i}>
                            {p}
                        </td>
                    ))}
                </tr>
            )
        } else {
            return (
                <tr>
                    <td><b>Part Of Speech</b><br/><Sm>(Stanford)</Sm></td>
                    <td colSpan={analysis.google.data[1].tokens.length.toString()}>
                        analyzing...
                    </td>
                </tr>
            )
        }
    },
    // Verb Tense
    // ** Google does not handle FUTURE tense. For example, "will", "shall",
    // ** "he'll", "they'll", "shan't", is/are/am combined with "going to", etc.
    // ** Also, I'm not yet sure how Google handles the past-, present-, and
    // ** future-progressive verb tenses, as well as the perfect tenses and the
    // ** perfect-progressive tenses.
    251: function(analysis) {
        return (
            <tr>
                <td><b>Verb Tense</b><br/><Sm>(Google)</Sm></td>
                {analysis.google.data[0].tokens.map((t, i) => (
                    t.tag === 'VERB' && t.dependencyEdge.label === 'ROOT' ?
                    <td>{t.tense}</td> :
                    t.tag === 'VERB' && t.dependencyEdge.label === 'AUX' ?
                    <td>AUX</td> :
                    <td>-</td>
                ))}
            </tr>
        )
    },
    // Shallow Parse Chunker
    26: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    // Google Grammar
    27: function(analysis) {
        return (
            <tr>
                <td><b>Grammar</b><br/><Sm>(Google)</Sm></td>
                {analysis.google.data[0].tokens.map((t, i) => (
                    <td key={i}>
                        {t.dependencyEdge.label}
                    </td>
                ))}
            </tr>
        )
    },
    // Stanford Grammar
    270: function(analysis) {
        if (analysis.stanford.data) {
            const stanford = analysis.stanford.data
            let grammar = []
            for (let s = 0; s < stanford.sentences.length; s++) {
                for (let d = 0; d < stanford.sentences[s].basicDependencies.length; d++) {
                    grammar.push({
                        grammar: stanford.sentences[s].basicDependencies[d].dep,
                        index: stanford.sentences[s].basicDependencies[d].dependent + (s * 100)
                    })
                }
            }
            grammar = grammar.sort((a, b) => a.index - b.index)
            return (
                <tr>
                    <td><b>Grammar</b><br/><Sm>(Stanford)</Sm></td>
                    {grammar.map((g, i) => (
                        <td key={i}>
                            {g.grammar.toUpperCase()}
                        </td>
                    ))}
                </tr>
            )
        } else {
            return (
                <tr>
                    <td><b>Grammar</b><br/><Sm>(Stanford)</Sm></td>
                    <td colSpan={analysis.google.data[1].tokens.length.toString()}>
                        analyzing...
                    </td>
                </tr>
            )
        }
    },
    // Plurality
    // ** Google sometimes thinks a noun is singular when it is actually plural.
    // ** For example, penguins in the sentence "He is mad at the penguins" is
    // ** flagged as singular.
    28: function(analysis, noTally = '-') {
        let pluralities = analysis.google.data[0].tokens.map(t => {
            if (t.tag === 'NOUN') {
                return t.number
            } else {
                return '-'
            }
        })
        let pluralitiesByCount = []
        let currentValue
        let count = 1
        for (let i = 0; i < pluralities.length; i++) {
            if (pluralities[i] === currentValue) {
                if (pluralities[i] !== noTally) {
                    count++
                }
                if (pluralities[i] === noTally) {
                    pluralitiesByCount.push({value: noTally, columns: 1})
                }
                if (i === pluralities.length - 1) {
                    pluralitiesByCount.push({value: currentValue, columns: count})
                }
            } else {
                if (i !== 0) {
                    pluralitiesByCount.push({value: currentValue, columns: count})
                }
                currentValue = pluralities[i]
                count = 1
                if (i === pluralities.length - 1) {
                    pluralitiesByCount.push({value: currentValue, columns: count})
                }
            }
        }
        return (
            <tr>
                <td><b>Plurality</b><br/><Sm>(Google)</Sm></td>
                {pluralitiesByCount.map((p, i) => (
                    <td colSpan={p.columns}>{p.value}</td>
                ))}
            </tr>
        )
    },
    // Google Lemma
    29: function(analysis) {
        return (
            <tr>
                <td><b>Lemma</b><br/><Sm>(Google)</Sm></td>
                {analysis.google.data[1].tokens.map((t, i) => (
                    <td key={i}>
                        {t.lemma === analysis.google.data[1].tokens[i].text.content ?
                            t.lemma :
                            <b>{t.lemma}</b>
                        }
                    </td>
                ))}
            </tr>
        )
    },
    // Stanford Lemma
    290: function(analysis) {
        if (analysis.stanford.data) {
            const stanford = analysis.stanford.data
            let lemma = []
            for (let s = 0; s < stanford.sentences.length; s++) {
                for (let t = 0; t < stanford.sentences[s].tokens.length; t++) {
                    lemma.push({
                        lemma: stanford.sentences[s].tokens[t].lemma.toLowerCase(),
                        token: stanford.sentences[s].tokens[t].originalText.toLowerCase()
                    })
                }
            }
            return (
                <tr>
                    <td><b>Lemma</b><br/><Sm>(Stanford)</Sm></td>
                    {lemma.map((l, i) => (
                        <td key={i}>
                            {l.lemma === l.token ?
                                l.lemma :
                                <b>{l.lemma}</b>
                            }
                        </td>
                    ))}
                </tr>
            )
        } else {
            return (
                <tr>
                    <td><b>Lemma</b><br/><Sm>(Stanford)</Sm></td>
                    <td colSpan={analysis.google.data[1].tokens.length.toString()}>
                        analyzing...
                    </td>
                </tr>
            )
        }
    },
    // Stem
    30: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    // Named Entities
    // ** bug: this function does not work well when there are
    // ** multiple people with the same name
    31: function(analysis, noTally = '-') {
        if (analysis.namedEntities.data) {
            // The results array is formatted like...
            // {name: 'John Munson', category: 'person'}
            // However, we need the data formatted like...
            // {name: 'John', category: 'person'}, {name: 'Munson', category: 'person'}
            const formattedResults = analysis.namedEntities.data.results
                // The data returned from the backend includes punctuation next to entities.
                // For example... {name: 'Munson.', category: 'person'}
                // The replace method is being used to trim off any punctuation.
                .map(e => e.name.split(' ').map(w => ({name: w.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/, ''), category: e.category})))
                // The reduce method is being used to flatten the multi-dimensional array.
                .reduce((acc, cur) => acc.concat(cur), [])
            // Create the entities array, which will initially be filled with placeholders
            const entities = analysis.google.data[1].tokens.map(t => noTally)
            // For each result, change the correct placeholder in the
            // entities array to the result category
            formattedResults.map(e => {
                const index = analysis.google.data[1].tokens.findIndex(t => t.text.content === e.name)
                entities[index] = e.category
                return true
            })
            // Loop through the entities array and count the times each value repeats consecutively.
            // Skip the noTally dashes.
            let entitiesByCount = []
            let currentValue
            let count = 1
            for (let i = 0; i < entities.length; i++) {
                if (entities[i] === currentValue) {
                    if (entities[i] !== noTally) {
                        count++
                    }
                    if (entities[i] === noTally) {
                        entitiesByCount.push({value: noTally, columns: 1})
                    }
                    if (i === entities.length - 1) {
                        entitiesByCount.push({value: currentValue, columns: count})
                    }
                } else {
                    if (i !== 0) {
                        entitiesByCount.push({value: currentValue, columns: count})
                    }
                    currentValue = entities[i]
                    count = 1
                    if (i === entities.length - 1) {
                        entitiesByCount.push({value: currentValue, columns: count})
                    }
                }
            }
            return (
                <tr>
                    <td><b>Name Finder</b><br/><Sm>(Apache)</Sm></td>
                    {entitiesByCount.map((e, i) => (
                        <td colSpan={e.columns}>{e.value}</td>
                    ))}
                </tr>
            )
        } else {
            return (
                <tr>
                    <td><b>Name Finder</b><br/><Sm>(Apache)</Sm></td>
                    <td>analysing...</td>
                </tr>
            )
        }
    },
    // Quantities
    32: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    // Coreference
    33: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    // Genders
    // ** The data returned from the backend seems to incorrectly
    // ** flag some nouns as having 'indeterminate' gender when
    // ** the gender should be null.
    330: function(analysis, noTally = '-') {
        if (analysis.genders.data) {
            let genders = analysis.genders.data.genders
            genders = genders.map(g => {
                if (g && g !== 'indeterminate') {
                    return g
                } else {
                    return '-'
                }
            })
            let gendersByCount = []
            let currentValue
            let count = 1
            for (let i = 0; i < genders.length; i++) {
                if (genders[i] === currentValue) {
                    if (genders[i] !== noTally) {
                        count++
                    }
                    if (genders[i] === noTally) {
                        gendersByCount.push({value: noTally, columns: 1})
                    }
                    if (i === genders.length - 1) {
                        gendersByCount.push({value: currentValue, columns: count})
                    }
                } else {
                    if (i !== 0) {
                        gendersByCount.push({value: currentValue, columns: count})
                    }
                    currentValue = genders[i]
                    count = 1
                    if (i === genders.length - 1) {
                        gendersByCount.push({value: currentValue, columns: count})
                    }
                }
            }
            return (
                <tr>
                    <td><b>Genders</b><br/><Sm>(Apache)</Sm></td>
                    {gendersByCount.map((g, i) => (
                        <td colSpan={g.columns}>{g.value}</td>
                    ))}
                </tr>
            )
        } else {
            return (
                <tr>
                    <td><b>Genders</b><br/><Sm>(Apache)</Sm></td>
                    <td>analysing...</td>
                </tr>
            )
        }
    },
    34: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    35: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    36: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    37: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    38: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    39: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    40: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    41: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    }
}

const SyntaxTable = (props) => (
    <table>
        <tbody>
            {props.google.data ? (
                props.activeSyntaxOptions.map(id => (
                    renderRow[id]({
                        google: props.google,
                        stanford: props.stanford
                    })
                ))
            ) : (
                null
            )}
        </tbody>
    </table>
)

export default SyntaxTable
