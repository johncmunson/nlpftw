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
                    t.tag === 'VERB' ? <td>{t.tense}</td> : <td>-</td>
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
                <td>
                    lorem ipsum
                </td>
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
    31: function(analysis) {
        const namedEntities = analysis.google.data[1].tokens.map(t => '-')
        analysis.namedEntities.data.results.map(e => {
            const index = analysis.google.data[1].tokens.findIndex(t => t.text.content === e.name)
            namedEntities[index] = e.category
        })
        return (
            <tr>
                <td><b>Apache Name Finder</b></td>
                {namedEntities.map((e, i) => (
                    <td>{e}</td>
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
