import React from 'react'

const NLPTable = (props) => (
    <table>
        <tbody>
            <tr>
                {props.terms.map(term => (
                    <td>
                        {term}
                    </td>
                ))}
            </tr>
        </tbody>
    </table>
)

export default NLPTable
