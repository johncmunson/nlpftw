import React from 'react'

const renderRow = {
    21: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    22: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    }
}

const PragmaticTable = (props) => (
    <table>
        <tbody>
            {props.analysis.google ? (
                props.activePragmaticOptions.map(id => (
                    renderRow[id](props.analysis)
                ))
            ) : (
                null
            )}
        </tbody>
    </table>
)

export default PragmaticTable
