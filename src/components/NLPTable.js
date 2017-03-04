import React from 'react'

const NLPTable = (props) => (
    <table>
        <tr>
            {props.terms.map(term => (
                <td>
                    {term}
                </td>
            ))}
        </tr>
    </table>
)

export default NLPTable
