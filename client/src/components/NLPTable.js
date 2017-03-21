import React from 'react'

function renderRows(props) {
    return (
        <div>
            <tr>
                <td><b>tokens</b></td>
                {props.analysis.data[1].tokens.map((t, i) => (
                    <td key={i}>
                        {t.text.content}
                    </td>
                ))}
            </tr>
            <tr>
                <td><b>part of speech</b></td>
                {props.analysis.data[1].tokens.map((t, i) => (
                    <td key={i}>
                        {t.partOfSpeech.tag}
                    </td>
                ))}
            </tr>
        </div>
    )
}

const NLPTable = (props) => (
    <table>
        <tbody>
            {props.analysis.data ? (
                renderRows(props)
            ) : (
                null
            )}
        </tbody>
    </table>
)

export default NLPTable
