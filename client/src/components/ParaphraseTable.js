import React from 'react'

const renderRow = {
    1: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    2: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    3: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    4: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    5: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    6: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    7: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    8: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    9: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    10: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    11: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    12: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    13: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    14: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    15: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    16: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    17: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    18: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    19: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    },
    20: function(analysis) {
        return (
            <tr>
                <td>
                    lorem ipsum
                </td>
            </tr>
        )
    }
}

const ParaphraseTable = (props) => (
    <table>
        <tbody>
            {props.analysis.google ? (
                props.activeParaphraseOptions.map(id => (
                    renderRow[id](props.analysis)
                ))
            ) : (
                null
            )}
        </tbody>
    </table>
)

export default ParaphraseTable
