import React from 'react'

const NLPTable = (props) => (
    <table>
        <tbody>
            {props.analysis.data ? (
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
            ) : (
                null
            )}
        </tbody>
    </table>
)

export default NLPTable
