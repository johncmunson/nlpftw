import React from 'react'

const NLPTable = (props) => (
    <table>
        <tbody>
            <tr>
                {props.terms.map((t, i) => (
                    <td key={i}>
                        {t}
                    </td>
                ))}
            </tr>
        </tbody>
    </table>
)

export default NLPTable
