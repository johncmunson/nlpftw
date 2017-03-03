import React from 'react'

const Table = (props) => (
    <div>
        <table>
            <tr>
                {props.textinput.split(' ').map(term => (
                    <td>
                        {term}
                    </td>
                ))}
            </tr>
            <tr>
                <td>the</td>
                <td>fox</td>
                <td>jumped</td>
                <td>over</td>
                <td>the</td>
                <td colSpan="4">dog</td>
            </tr>
        </table>
    </div>
)

export default Table
