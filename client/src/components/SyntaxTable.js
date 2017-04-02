import React from 'react'

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
    // Show Tokens
    // ** the corresponding checkbox is currently hidden
    // ** and set to active in the reducer
    24: function(analysis) {
        return (
            <tr>
                <td><b>Tokens</b></td>
                {analysis.google.data[1].tokens.map((t, i) => (
                    <td key={i}>
                        {t.text.content}
                    </td>
                ))}
            </tr>
        )
    },
    // Part-Of-Speech
    25: function(analysis) {
        return (
            <tr>
                <td><b>Part-Of-Speech</b></td>
                {analysis.google.data[1].tokens.map((t, i) => (
                    <td key={i}>
                        {t.partOfSpeech.tag}
                    </td>
                ))}
            </tr>
        )
    },
    // Verb Tense
    250: function(analysis) {
        return (
            <tr>
                <td><b>Verb Tense</b></td>
                {analysis.google.data[0].tokens.map((t, i) => (
                    t.tag === 'VERB' && t.dependencyEdge.label === 'ROOT' ? <td>{t.tense}</td> : <td>-</td>
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
    // Grammar/Dependency Parse
    27: function(analysis) {
        return (
            <tr>
                <td><b>Grammar</b></td>
                {analysis.google.data[0].tokens.map((t, i) => (
                    <td key={i}>
                        {t.dependencyEdge.label}
                    </td>
                ))}
            </tr>
        )
    },
    // Propositions
    28: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    // Plurality
    280: function(analysis) {
        return (
            <tr>
                <td><b>Plurality</b></td>
                {analysis.google.data[0].tokens.map((t, i) => (
                    t.tag === 'NOUN' ? <td>{t.number}</td> : <td>-</td>
                ))}
            </tr>
        )
    },
    // Lemma
    29: function(analysis) {
        return (
            <tr>
                <td><b>Lemma</b></td>
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
        console.log(entities)
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
                <td><b>Apache Name Finder</b></td>
                {entitiesByCount.map((e, i) => (
                    <td colSpan={e.columns}>{e.value}</td>
                ))}
            </tr>
        )
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
    },
    42: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    43: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    44: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    45: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    46: function(analysis) {
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
            {props.analysis.google ? (
                props.activeSyntaxOptions.map(id => (
                    renderRow[id](props.analysis)
                ))
            ) : (
                null
            )}
        </tbody>
    </table>
)

export default SyntaxTable
