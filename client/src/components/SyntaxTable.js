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
    // Show Tokens
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
    // Part-Of-Speech
    25: function(analysis) {
        return (
            <tr>
                <td><b>Part-Of-Speech</b><br/><Sm>(Google)</Sm></td>
                {analysis.google.data[1].tokens.map((t, i) => (
                    <td key={i}>
                        {t.partOfSpeech.tag}
                    </td>
                ))}
            </tr>
        )
    },
    // Verb Tense
    // ** The data returned from Google is sometimes flawed in regards to verb tense.
    // ** For example, in the sentence "Sarah is running to school", "running" should
    // ** be flagged with a verb tense of "present". However, no tense is specified at
    // ** all. Strangely, Google returns the correct data when given the sentence
    // ** "He is running to school".
    250: function(analysis) {
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
    // Grammar/Dependency Parse
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
    // ** Google sometimes thinks a noun is singular when it is actually plural.
    // ** For example, penguins in the sentence "He is mad at the penguins" is
    // ** flagged as singular.
    280: function(analysis, noTally = '-') {
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
    // Lemma
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
    // 2-Gram
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
    <div>
        <table>
            <tbody>
                {props.analysis.google ? (
                    props.activeSyntaxOptions.map(id => {
                        if (id < 42 || id > 100) {
                            return renderRow[id](props.analysis)
                        } else {
                            return null
                        }
                    })
                ) : (
                    null
                )}
            </tbody>
        </table>
        <table>
            <tbody>
                {props.analysis.google ? (
                    props.activeSyntaxOptions.map(id => {
                        if (id >= 42 && id <= 100) {
                            return renderRow[id](props.analysis)
                        } else {
                            return null
                        }
                    })
                ) : (
                    null
                )}
            </tbody>
        </table>
    </div>
)

export default SyntaxTable
